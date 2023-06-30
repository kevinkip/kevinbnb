import { SafeListing } from './../types/index';
import prisma from '../libs/prismadb'

export interface IListingParams {
    userId?: string;
    guestCount?: number;
    roomCount?: number;
    bathroomCount?: number;
    startDate?: string;
    endDate?: string;
    locationValue?: string;
    category?: string;
}

export default async function getListings(
    params: IListingParams
) {
    try {
        const {
            userId,
            roomCount,
            guestCount,
            bathroomCount,
            locationValue,
            startDate,
            endDate,
            category,
        } = params;

        let query: any = {};

        if(userId) {
            query.userId = userId;
        }

        if(category){
            query.category = category;
        }

        if(roomCount) {
            query.roomCount = {
                gte: +roomCount
            }
        }

        if(guestCount) {
            query.guestCount = {
                gte: +guestCount
            }
        }

        if(bathroomCount){
            query.bathroomCount = {
                gte: +bathroomCount
            }
        }

        if(locationValue){
            query.locationValue = locationValue
        }

        if(startDate && endDate){
            query.NOT = {
                reservations: {
                    some: {
                        OR: [
                            {
                                endDate: { gte: startDate },
                                startDate: { lte: startDate }
                            },
                            {
                                startDate: { lte: endDate },
                                endDate: { gte: endDate }
                            }
                        ]
                    }
                }
            }
        }
        const listingsCount = await prisma.listing.count();
        const skip = Math.floor(Math.random() * listingsCount);
        const listings = await prisma.listing.findMany({
            take: 5,
            skip: skip,
            where: query,
            orderBy: {
                createdAt: 'desc'
            }
        });

        const SafeListing = listings.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt.toISOString(),
        }))

        return SafeListing;
    } catch (error: any) {
       throw new Error(error) 
    }
}