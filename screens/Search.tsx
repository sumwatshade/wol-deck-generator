import React, {useState} from "react";
import {StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import Fuse from 'fuse.js';
import SpellComponent from "../components/Spell";

type Spell = {
    name: string,
    subtype: string,
    slot: string,
    effect: string,
    enhanced: string,
    type: string,
    pool: string
}

type Relic = {
    name: string,
    type: string,
    effect: string,
    pool: string
}

import data from "../assets/data.json";
const relics: Relic[] = Object.values(data.relics);
const spells: Spell[] = Object.values(data.spells);
//const all: (Relic|Spell)[] = relics.concat(spells);

const commonOptions: Fuse.FuseOptions<Relic|Spell> = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100
}
const relicOptions: Fuse.FuseOptions<Relic> = {
    ...commonOptions,
    keys: ['name', 'type', 'effect', 'pool']
};

const spellOptions: Fuse.FuseOptions<Spell> = {
    ...commonOptions,
    keys: ['name', 'type', 'effect', 'pool', 'enhanced', 'slot', 'subtype']
};

const relicSearch = new Fuse(relics, relicOptions);
const spellSearch = new Fuse(spells, spellOptions);

export default function Search() {
    const [search, updateSearch] = useState("");

    return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            onChangeText={updateSearch}
            value={search}
        />
        <FlatList
            style={styles.list}
            data={spellSearch.search(search)}
            renderItem={(d) => (<SpellComponent key={d.item.name} spell={d.item}/>)}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: "10%",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: 40,
        width: "80%",
        borderColor: 'gray',
        borderWidth: 1
    },
    list: {
        height: "80%",
        width: "100%",
    }
});