import React, {useState} from "react";
import {StyleSheet, KeyboardAvoidingView, TextInput, FlatList, KeyboardAvoidingViewComponent} from 'react-native';
import Fuse from 'fuse.js';
import SpellComponent from "../components/Spell";

interface Spell {
    name: string;
    subtype: string;
    slot: string;
    effect: string;
    enhanced: string;
    type: string;
    pool: string;
}

interface Relic {
    name: string;
    type: string;
    effect: string;
    pool: string;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: "5%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#252a34"
    },
    input: {
        height: 40,
        marginTop: 20,
        width: "100%",
        borderColor: '#ff2e63',
        backgroundColor: "#eaeaea",
        padding: 5,
        borderWidth: 1
    },
    list: {
        height: "80%",
        width: "100%",
    }
});

import data from "../assets/data.json";
const relics: Relic[] = Object.values(data.relics);
const spells: Spell[] = Object.values(data.spells);
//const all: (Relic|Spell)[] = relics.concat(spells);

const commonOptions: Fuse.FuseOptions<Relic|Spell> = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100
};

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


const renderSpellComponent: React.SFC<any> = (d) => {
    return <SpellComponent key={d.item.name} spell={d.item}/>
};

const Search: React.FunctionComponent<{}> = () => {
    const [search, updateSearch] = useState("");

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <TextInput
                style={styles.input}
                onChangeText={updateSearch}
                value={search}
                placeholder="Search Spells"
            />
            <FlatList
                style={styles.list}
                data={spellSearch.search(search)}
                renderItem={renderSpellComponent}
            />
        </KeyboardAvoidingView>
    )
};

export default Search