export const Filter = ({ value, onChange }) => (
    <label>
        <p>Find contacts by name</p>
        <input type="text"
            name="filter"
            value={ value}
            onChange={onChange } />
    </label>
)