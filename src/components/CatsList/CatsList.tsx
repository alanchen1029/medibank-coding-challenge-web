import { useCatsList } from './talon/useCatsList';
import defaultClasses from './CatsList.module.scss';
import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const CatsList = () => {
    const { isLoading, catsWithMaleOwner, catsWithFemaleOwner, errorMessage } = useCatsList();

    if (isLoading) {
        return (
            <LoadingSkeleton
                skeletonQuantity={10}
                classes={{
                    loadingSkeletonModifier: defaultClasses.loadingSkeletonModifier
                }}
            />
        );
    }

    if (errorMessage) {
        return <ErrorMessage message={errorMessage} />;
    }

    const CatsNameList = ({ catsArray, title }: { catsArray: string[]; title: string }) => (
        <div className={defaultClasses.listWrapper}>
            <h2 className={defaultClasses.listTitle}>{title}</h2>
            {catsArray.length ? (
                <ul className={defaultClasses.listItemsWrapper}>
                    {catsArray.map((cat, index) => (
                        <li
                            className={defaultClasses.listItem}
                            key={`${cat}-${title}-owner-${index}`}>
                            {cat}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No cats found</p>
            )}
        </div>
    );

    return (
        <div>
            <CatsNameList catsArray={catsWithMaleOwner} title={'Male'} />
            <CatsNameList catsArray={catsWithFemaleOwner} title={'Female'} />
        </div>
    );
};

export default CatsList;
