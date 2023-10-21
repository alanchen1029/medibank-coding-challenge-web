import { useCatsList } from './talon/useCatsList';

const CatsList = () => {
    const { isLoading, catsWithMaleOwner, catsWithFemaleOwner } = useCatsList();

    if (isLoading) {
        return <h1>Loading....</h1>;
    }

    return (
        <div>
            <h1>Cats List</h1>
            <div>
                <h2>Male</h2>
                {catsWithMaleOwner.length ? (
                    catsWithMaleOwner.map((cat, index) => (
                        <h3 key={`${cat}-male-owner-${index}`}>{cat}</h3>
                    ))
                ) : (
                    <p>No cats found</p>
                )}
            </div>
            <div>
                <h2>Female</h2>
                {catsWithFemaleOwner.length ? (
                    catsWithFemaleOwner.map((cat, index) => (
                        <h3 key={`${cat}-female-owner-${index}`}>{cat}</h3>
                    ))
                ) : (
                    <p>No cats found</p>
                )}
            </div>
        </div>
    );
};

export default CatsList;
