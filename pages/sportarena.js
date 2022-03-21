/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'
import TabelleBL from '../components/TabelleBL'
import axios from 'axios'
import React, { useMemo } from 'react'
import { container } from 'tailwindcss/defaultTheme'
import Modal6 from '../components/Modal6'

export default class FetchDataUser extends React.Component {
  state = {
    loading: true,
    tabelle: [],
  }

  async componentDidMount() {
    const Token = '41c4813ea4f746fbbdd2bdb9c5250aa4'
    const Url = 'https://api.football-data.org/v2/competitions/2002/standings?'
    const url2 = (Url, { headers: { 'X-Auth-Token': Token } })

    const url4 =
      'https://api.football-data.org/v2/competitions/2002/standings?X-Auth-Token=41c4813ea4f746fbbdd2bdb9c5250aa4'
    const response = await fetch(Url, { headers: { 'X-Auth-Token': Token } })
    const data = await response.json()
    console.log(data.season)
    this.setState({ tabelle: data.season, loading: false })
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }

    if (!this.state.tabelle) {
      return <div>didn't get data Bundesliga</div>
    }

    return (
      <>
        <container className="flex flex-col items-stretch min-h-screen w-[100vw] mx-auto mb-auto">
          <div
            style={{ 'background-image': "url('/sportarena.jpg')" }}
            className="flex-1 w-[100vw] h-[120vh] bg-cover border-t border-b border-yellow-400  bg-no-repeat"
          >
            <p className="mt-5 text-5xl headingc text-center text-white xl:text-[7rem]">
              DIE SPORTARENA{' '}
            </p>
            {/*<DataSCFreiburg></DataSCFreiburg>*/}
            <div className="flex flex-col items-center justify-start">
              <p className="mb-16 headingc text-4xl text-center text-white">
                Tisch reservieren?
              </p>
              <div className="mt-mt-3   2xl:mt-24">
              <Modal6 className=""></Modal6>
              </div>
              
            </div>
            <p className="mt-5 mx-auto text-1xl text-gray-200 text-center font-sans xl:text-2xl">
              Saison vom{' '}
              <span className="text-yellow-500 font-bold">
                {this.state.tabelle.startDate}
              </span>{' '}
              bis{' '}
              <span className="text-yellow-500 font-bold">
                {this.state.tabelle.endDate}
              </span>
            </p>
            <p className="mx-auto text-4xl text-gray-200 text-center font-sans 2xl:text-6xl">
              Die Bundesliga
            </p>
            <p className="mx-auto text-2xl text-gray-200 text-center font-sans xl:text-2xl">
              <span className="text-yellow-500 font-bold">
                {this.state.tabelle.currentMatchday}.
              </span>{' '}
              Spieltag
            </p>
            :
            <div className="container mt-5 text-xs border border-yellow-500 w-full md:w-11/12 xl:w-10/12 mx-auto mb-24">
              <TabelleBL className="text-xxs"></TabelleBL>
            </div>
          </div>

          <div></div>
        </container>
      </>
    )
  }
}
