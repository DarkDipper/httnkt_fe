import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, Link, ListItemText } from '@mui/material';
//
import { ListItemStyle, ListItemTextStyle, ListItemIconStyle } from './style';
import { isExternalLink } from '..';
import { IoIosArrowBack, IoIosArrowDown} from 'react-icons/io';

// ----------------------------------------------------------------------

export function NavItemRoot({ item, isCollapse, open = false, active, onOpen }) {
  const { title, icon, children } = item;

  const renderContent = (
    <>
      {icon && <ListItemIconStyle>{icon}</ListItemIconStyle>}
      <ListItemTextStyle disableTypography primary={title} isCollapse={isCollapse} />
      {!isCollapse && (
        <>
          {children && <ArrowIcon open={open} />}
        </>
      )}
    </>
  );

  if (children) {
    return (
      <ListItemStyle onClick={onOpen} activeRoot={active}>
        {renderContent}
      </ListItemStyle>
    );
  }

  return (
    <ListItemStyle component={Link} target="_blank" rel="noopener">
      {renderContent}
    </ListItemStyle>
  );
}

// ----------------------------------------------------------------------

export function NavItemSub({ item, open = false, active = false, onOpen }) {
  const { title, path, info, children } = item;

  const renderContent = (
    <>
      <DotIcon active={active} />
      <ListItemText disableTypography primary={title} />
      {info && info}
      {children && <ArrowIcon open={open} />}
    </>
  );

  if (children) {
    return (
      <ListItemStyle onClick={onOpen} activeSub={active} subItem>
        {renderContent}
      </ListItemStyle>
    );
  }

  return (
    <ListItemStyle>
      {renderContent}
    </ListItemStyle>
  )
}

// ----------------------------------------------------------------------
export function DotIcon({ active }) {
  return (
    <ListItemIconStyle>
      <Box
        component="span"
        sx={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'text.disabled',
          transition: (theme) =>
            theme.transitions.create('transform', {
              duration: theme.transitions.duration.shorter,
            }),
          ...(active && {
            transform: 'scale(2)',
            bgcolor: 'primary.main',
          }),
        }}
      />
    </ListItemIconStyle>
  );
}

// ----------------------------------------------------------------------

export function ArrowIcon({ open }) {
  // sx={{ width: 16, height: 16, ml: 1 }}
  return (
    <>
      { open?<IoIosArrowDown />:<IoIosArrowBack />}
    </>
  );
}
