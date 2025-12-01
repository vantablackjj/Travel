import { useState, useEffect, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import config from '../../../../config/index.jsx';
import useDebounce from '../../../../hooks/useDebounce.jsx';
import styles from './Search.module.scss';

function Search() {
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const inputRef = useRef(null);

    const debounced = useDebounce(inputValue, 500);

    const handleInput = (e) => {
        const newValue = e.target.value;
        // Prevent starting with space
        if (!newValue.startsWith(' ')) {
            setInputValue(newValue);
        }
    };

    useEffect(() => {
        if (!debounced.trim()) {
            setValue([]);
            setShowResults(false);
            return;
        }

        const fetchDestinations = async () => {
            try {
                const results = await config.search.search(debounced);
                setValue(results);
                setShowResults(results.length > 0);
            } catch (error) {
                console.error('Error fetching search results:', error);
                setValue([]);
                setShowResults(false);
            }
        };

        fetchDestinations();
    }, [debounced]);

    const handleClear = () => {
        setInputValue('');
        setValue([]);
        setShowResults(false);
    };

    return (
        <div className={styles.search}>
            <Tippy
                visible={showResults && value.length > 0}
                interactive={true}
                placement="bottom"
                offset={[0, 8]}
                onClickOutside={() => setShowResults(false)}
                render={(attrs) => (
                    <div className={styles.searchResult} tabIndex="-1" {...attrs}>
                        <h4 className={styles.searchTitle}>Destinations</h4>
                        <div className={styles.searchList}>
                            {value.map((result) => (
                                <a
                                    key={result.id}
                                    href={`/destinations/${result.id}`}
                                    className={styles.searchItem}
                                    onClick={() => {
                                        setShowResults(false);
                                        handleClear();
                                    }}
                                >
                                    <img src={result.image} alt={result.name} className={styles.searchImage} />
                                    <div className={styles.searchInfo}>
                                        <span className={styles.searchName}>{result.name}</span>
                                        {result.country && (
                                            <span className={styles.searchCountry}>{result.country}</span>
                                        )}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            >
                <div className={styles.searchInput}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={handleInput}
                        onFocus={() => {
                            if (value.length > 0) {
                                setShowResults(true);
                            }
                        }}
                        placeholder="Search destinations..."
                        className={styles.input}
                    />
                    {inputValue && (
                        <button className={styles.clearBtn} onClick={handleClear} type="button">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    )}
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
