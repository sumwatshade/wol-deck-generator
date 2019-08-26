import React, {useState} from "react";
import {StyleSheet, TextInput, FlatList, KeyboardAvoidingView, Switch} from 'react-native';
import Fuse from 'fuse.js';

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
        height: 60,
        marginTop: 20,
        width: "80%",
        borderColor: '#ff2e63',
        backgroundColor: "#eaeaea",
        padding: 5,
        borderWidth: 1,
        fontFamily: "GameOver",
        fontSize: 45
    },
    list: {
        height: "80%",
        width: "100%",
    },
    switch: {
        maxWidth: "20%"
    }
});

import data from "../assets/data.json";
import Relic from "../components/Relic";
import Spell from "../components/Spell";

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

/* eslint-disable */
const ListItem = (Component) => (d) => {
    return <Component key={d.item.name} item={d.item}/>
};
/* eslint-enable */

const Search: React.FunctionComponent<{}> = () => {
    const [search, updateSearch] = useState("");
    
    const [isRelic, toggleRelicsOrSpells] = useState(false);

    const handleToggleSwitch = () => {
        toggleRelicsOrSpells(!isRelic);
    }

    const placeholderText = isRelic ? "Search Relics" : "Search Spells";

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <TextInput
                style={styles.input}
                onChangeText={updateSearch}
                value={search}
                placeholder={placeholderText}
            />
            <Switch
                style={styles.switch}
                value={isRelic}
                onValueChange={handleToggleSwitch}
                thumbColor="#08d9d6"
                trackColor={{ false: "#eaeaea", true: "false"}}

            />
            <FlatList
                style={styles.list}
                data={isRelic ? relicSearch.search(search) : spellSearch.search(search)}
                renderItem={isRelic ? ListItem(Relic) : ListItem(Spell)}
            />
        </KeyboardAvoidingView>
    )
};

export default Search