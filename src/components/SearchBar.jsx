import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (<Paper
    component='form'
    onSubmit={()=>{}}
    sx={{
        borderRadius:'10px',
        border:'1px solid #232323',
        pl:2,
        mr:{sm:5},
        boxShadow:'none',
        backgroundColor:'#202124'
    }}
  >
    <input
        className="search-bar"
        placeholder="Search"
        value=""
        onChange={()=>{}}
        style={{backgroundColor:'transparent', fontSize:'18px'}}
    />
    <IconButton type="submit" sx={{p:"10px", color:'red' }} >
        <Search/>
    </IconButton>
  </Paper>);
};

export default SearchBar;
