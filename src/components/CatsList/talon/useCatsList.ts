import { sortArrayAlphabetically } from './../../../utils/sortArrayAlphabetically';
import { useEffect, useState } from 'react';
import { separateCatsByOwnerGender } from './../../../utils/separateCatsByOwnerGender';
import { axiosGet } from '../../../API/requestSender';
import { PETS_LIST_ENDPOINT_URL } from '../../../constants/constants';

export const useCatsList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [catsWithMaleOwner, setCatsWithMaleOwner] = useState<string[]>([]);
    const [catsWithFemaleOwner, setCatsWithFemaleOwner] = useState<string[]>([]);

    const getCatsListData = async () => {
        try {
            const petsListResponse = await axiosGet(PETS_LIST_ENDPOINT_URL);

            if (petsListResponse?.data) {
                // Extract all cats based on owners' gender
                const transformedCatsList = separateCatsByOwnerGender(petsListResponse.data);

                setCatsWithMaleOwner(
                    sortArrayAlphabetically(transformedCatsList.catsWithMaleOwner)
                );
                setCatsWithFemaleOwner(
                    sortArrayAlphabetically(transformedCatsList.catsWithFemaleOwner)
                );
            }
        } catch (error) {
            setErrorMessage('Unexpected error, please try again');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // Fire the API call to fetch the owners->pets list data
        getCatsListData();
    }, []);

    return {
        isLoading,
        errorMessage,
        catsWithMaleOwner,
        catsWithFemaleOwner
    };
};
