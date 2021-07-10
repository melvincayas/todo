const SortDropdown = ({ sortValue, onChangeHandler }) => {
	return (
		<select
			value={sortValue}
			onChange={onChangeHandler}
			name="sort"
			className="mb-5 ml-2"
		>
			<option value="recent">Recently Updated</option>
			<option value="ascending">Name: A-Z</option>
			<option value="descending">Name: Z-A</option>
			<option value="newest">Newest</option>
		</select>
	);
};

export default SortDropdown;
