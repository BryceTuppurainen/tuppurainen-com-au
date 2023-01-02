import styles from '../../styles/styles.module.scss'

import CustomHead from '../../components/CustomHead'
import A from '../../components/A'
import { useEffect, useState } from 'react';

import standards from './standards.json';

export default function Home() {

    const [matchingStandards, setMatchingStandards] = useState<standardType[]>([]);
    const [search, setSearch] = useState('');

    // Load the standards from the file into local client memory
    const localStandards = standards;

    type standardType = {
        name?: string;
        description: string,
        year?: string,
        link?: string
    }


    useEffect(() => {

        const searchStandards = (searchTerm: string) => {
            const matches: standardType[] = [];
            for (const key in localStandards) {
                const standard: standardType = localStandards[key as keyof typeof localStandards];
                if (key.toLowerCase().includes(searchTerm.toLowerCase())) {
                    matches.push({
                        name: key,
                        description: standard.description,
                        year: standard.year,
                        link: standard.link
                    });
                } else if (standard.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                    matches.push({
                        name: key,
                        description: standard.description,
                        year: standard.year,
                        link: standard.link
                    });
                }

            }
            setMatchingStandards(matches);
        }

        searchStandards(search);
    }, [localStandards, search])

    return (
        <>
            <CustomHead />
            <main className={styles.main}>
                <header className={styles.header}>
                    <h3><A href="/"> tuppurainen.com.au</A></h3>

                    <h1>Bryce&apos;s Standards Encyclopedia</h1>

                    <p>This page is a little special. This is another side-project that I&apos;ve been working on in my spare time, but hopefully it&apos;ll end up coming in handy for others too. It&apos;s pretty similar to <A href="https://www.engineeringtoolbox.com/">The Engineering Toolbox</A>, <A href="https://www.standards.org.au/standards-catalogue/international/iec">the IEC Standards Catalog</A>, and other similar standards pages and simply contains a variety of relatively random information about various international standards in a searchable way</p>
                </header>

                <section className={styles.section}>
                    <h2>Search</h2>
                    <p>Search for a standard by name, number, or description</p>
                    <input type="text" className={styles.input} onChange={(e) => {
                        setSearch(e.target.value);
                    }} />
                </section>

                {
                    matchingStandards.map((standard: standardType, index) => {
                        return (
                            <section className={styles.section} key={index}>
                                <h2>{standard.name}</h2>
                                <p>{standard.description}</p>
                                {standard.year != undefined
                                    && <p> Year: {standard.year}
                                        {standard.link != undefined &&
                                            <p>Link: <A href={standard
                                                .link || ""}>{standard.link}</A></p>}

                                    </p>}
                            </section>
                        )
                    })
                }

            </main>
        </>
    )
}