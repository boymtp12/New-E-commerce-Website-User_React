import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { useDispatch } from "react-redux";
import { changeDataProductList } from "../../../redux/reducer_action/BaseReducerAction";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function FilterMenu() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [type, setType] = React.useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //giam
  const handleSort = async (params) => {
    await fetch(`http://localhost:8080/product?sortName=price&sortDirection=${params}`)
      .then(async (response) => await response.json())
      .then(async (rs) => {
        setType(params)
        await dispatch(changeDataProductList([...rs]));
      });
  };


  const handleReset = async () => {
    await fetch(`http://localhost:8080/product`)
    .then(async (response) => await response.json())
    .then(async (rs) => {
      setType(null)
      await dispatch(changeDataProductList([...rs]));
    });
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<FilterListIcon />}
      >
        Filter List
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem disableRipple>Bộ lọc</MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={() => handleSort('DESC')} disableRipple style={type === 'DESC' ? {background: '#ccc'} : {}}>
          <SortIcon />
          Giá cả - từ cao đến thấp
        </MenuItem>
        <MenuItem onClick={() => handleSort('ASC')} disableRipple style={type === 'ASC' ? {background: '#ccc'} : {}}>
          <SortByAlphaIcon />
          Giá cả - từ thấp đến cao
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={() => handleReset()} disableRipple>
          <ClearAllIcon />
          Xóa bộ lọc
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
