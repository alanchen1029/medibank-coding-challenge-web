import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import classNames from 'classnames';
import defaultClasses from './LoadingSkeleton.module.scss';

interface LoadingSkeletonPropsType {
    skeletonQuantity?: number;
    classes?: {
        loadingSkeletonModifier: string;
    };
}

const LoadingSkeleton = (props: LoadingSkeletonPropsType) => {
    const { skeletonQuantity = 1, classes } = props;

    return (
        <Skeleton
            count={skeletonQuantity}
            className={classNames(defaultClasses.skeleton, classes?.loadingSkeletonModifier)}
        />
    );
};

export default LoadingSkeleton;
