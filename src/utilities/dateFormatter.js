export const formatDate = (date) => {
    if (date) {
        const startDateParts = date
        const convertedDateString = startDateParts?.replace(/-/g, '/')
        const dateComponents = convertedDateString?.split('/');

        // Rearrange the components to the desired format
        const rearrangedDate = `${dateComponents[2]}/${dateComponents[1]}/${dateComponents[0]}`;


        return rearrangedDate
    }
    else {
        return 'N/A'
    }

}