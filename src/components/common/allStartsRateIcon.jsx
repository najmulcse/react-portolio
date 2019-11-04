import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';

const AllStartsRateIcon = ({ counts, color }) => {
    
    const countObject = [];
    for ( let i =0; i< counts; i++ ){
        countObject.push({ id: i, label: 'default'});
    }
    console.log(counts);
    return ( 
        <React.Fragment>
                { countObject.map( item => (
                    <StarRateIcon color={color}/>
                ))}
        </React.Fragment>
     );
}
 
export default AllStartsRateIcon;