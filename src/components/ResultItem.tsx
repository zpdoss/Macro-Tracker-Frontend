
export const ResultItem = ({result}: any) => {
    return <div className="resultItem" onClick={(_e) => alert('you clicked on something')}>{result.name}</div>;
};