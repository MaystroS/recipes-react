import React from 'react';
import {Button, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

function Search({onSearch}) {
	const inputRef = React.useRef(null);

	const [searchStr, setSearchStr] = React.useState('');

	const onKeyDownHandler = ({keyCode}) => {
		if (keyCode !== 13) return;
		setSearchStr(inputRef.current.value);
	};

	React.useEffect(() => {
		onSearch(searchStr);
	}, [searchStr]);

	return (
		<div className='search'>
			<div className='search__icon'>
				<SearchIcon />
			</div>
			<TextField
				inputRef={inputRef}
				placeholder="Search…"
				inputProps={
					{ 'aria-label': 'search' }
				}
				onKeyDown={onKeyDownHandler}
			/>
			<div className='search__btn'>
				<Button
					variant='contained'
					color='primary'
					onClick={() => setSearchStr(inputRef.current.value)}
				>
					Search
				</Button>
			</div>
		</div>
	);
}

export default Search;
