import { useDispatch, useSelector } from 'react-redux';
import { filterValue, getFilter } from '../../../redux/filterSlise';
import PropTypes from 'prop-types';
import { Input, Span, Label } from './filter.styled';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    const onChange = (event) => {
        dispatch(filterValue(event.target.value.toLowerCase()));
    }
    return (
        <Label htmlFor="filter">
        <Span>Find contacts by name</Span>
        <Input onChange={onChange} type="filter" name="filter" value={filter}/>
        </Label>
    );
};

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default Filter;