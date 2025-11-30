import styles from './Search.module.scss';

function Search() {
    return (
        <div className={styles.search}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <input type="text" placeholder="Search destinations..." />
        </div>
    );
}

export default Search;
