import React from 'react'
import { SafeAreaView,Text, ScrollView } from 'react-native'
import FlatCard from './components/FlatCard'
import ElevatedCard from './components/ElevatedCard'
import FacncyCard from './components/FacncyCard'
import ActionCard from './components/ActionCard'
import Iterables from './components/Iterables'


function App() {

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FacncyCard />
        <FacncyCard />
        <ActionCard />
        <Iterables />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

