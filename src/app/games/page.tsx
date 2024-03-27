import React from 'react'

import Body from '@/components/Body'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { createGame, fetchGamesList } from '@/utils/GamesCookieClient';
import { CreateGamesInput, Games } from '@/API'

import gamesData from '@/assets/data/games.json'

async function postWrapper() {
    'use server'

    gamesData.map((game) => {
        var entry: CreateGamesInput = game;
        createGame(entry);
    })
}
async function Games() {
    const {data_list, errors} = await fetchGamesList();
    const games: Games[] = data_list;
    return (
        <div>
        <Header/>
        <Body>
            <div className='content'>
                {(!games || games.length === 0 || errors) && (
                    <p>no games yet {games.length}</p>
                )}
                <ul>
                    {games.map((game) => {
                        return <li>{game.id} | {game.title}</li>
                    })}
                </ul>
            </div>
        </Body>
        <Footer />
        </div>
    )
}

export default Games
