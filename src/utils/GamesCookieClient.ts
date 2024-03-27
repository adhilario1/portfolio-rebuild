import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";

import {revalidatePath} from 'next/cache'
import * as mutations from '@/graphql/mutations'
import * as queries from '@/graphql/queries'

import config from '@/amplifyconfiguration.json'
import { CreateGamesInput, Games } from "@/API";

const cookiesClient = generateServerClientUsingCookies({
    config,
    cookies
})

export async function createGame(formData: CreateGamesInput) {
    'use server'
    const { data } = await cookiesClient.graphql({
        query: mutations.createGames,
        variables: {
            input: {
                title: formData.title?.toString() ?? '',
                preview: formData.preview ?? null,
                description: formData.description?.toString(),
                tags: formData.tags ?? [''],
                year: formData.year ?? (new Date()).getFullYear(),
                type: formData.type?.toString() ?? '',
                thumbnail_url: formData.thumbnail_url?.toString() ?? '',
                url: formData.url?.toString() ?? '',
                outbound_url: formData.outbound_url?.toString() ?? '',
                outbound_label: formData.outbound_label?.toString() ?? '',
                mobile: formData.mobile ?? false
            }
        }
    })

    console.log('Created Game:', data?.createGames);

    revalidatePath('/');
}

export async function fetchGamesList() {
    const {data, errors} = await cookiesClient.graphql({
        query: queries.listGames
    });

    const data_list: Games[] = data.listGames.items;
    return {data_list, errors}
}