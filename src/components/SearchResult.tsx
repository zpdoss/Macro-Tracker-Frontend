
import { ResultItem } from '../components/ResultItem';
export const SearchResult = ({results}: any) => {
    return(
        <div className="resultList">
           {
                results.map((result: any, id: any)=>{
                    return <ResultItem result={result} key={id}/>;
                })
           }
        </div>
    );
};