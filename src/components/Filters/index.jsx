import Box from '@mui/material/Box';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, category, theme) {
  return {
    fontWeight:
      category.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Filter(props) {
    const theme = useTheme();
    const [sort, setSort] = React.useState('');
    const [filterBy,setFilterBy] = React.useState([]);
    const handleChange = (event) => {
        setSort(event.target.value);
        props.filter(event.target.value,filterBy)
    };
    const handleChangeFilter = (event) => {
        const {
            target: { value },
          } = event;
          setFilterBy(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
          );
        props.filter(sort, typeof value === 'string' ? value.split(',') : value)

    };
    return (
        <div style={{marginTop: "24px",display:"flex"}}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sort}
                    label="Sort By"
                    onChange={handleChange}
                    input={<OutlinedInput label="Sort By" />}
                    MenuProps={MenuProps}
                    >
                    <MenuItem key="1" value={""}>Select One</MenuItem>
                    <MenuItem key="2" value={"pricedesc"}>Price High to Low</MenuItem>
                    <MenuItem key="3" value={"priceaesc"}>Price Low to High</MenuItem>
                    <MenuItem key="4" value={"ratingdesc"}>Rating High to Low</MenuItem>
                    <MenuItem key="5" value={"ratingaesc"}>Rating Low to High</MenuItem>
                    <MenuItem key="6" value={"alphdaesc"}>Alphabetical High to Low</MenuItem>
                    <MenuItem key="7" value={"alphaaesc"}>Alphabetical Low to High</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Category</InputLabel>
                <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={filterBy}
                onChange={handleChangeFilter}
                input={<OutlinedInput label="Category" />}
                MenuProps={MenuProps}
                >
                {props.categories.map((name) => (
                    <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, props.categories, theme)}
                    >
                    {name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>  
            </Box>
        </div>
    )
}