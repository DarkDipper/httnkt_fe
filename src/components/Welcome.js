// import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Button, Card, CardContent } from '@mui/material';
import { SeoIllustration } from '../assets';
// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.lighter,
  [theme.breakpoints.up('md')]: {
    height: '100%',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

// ----------------------------------------------------------------------

export default function Welcome({ displayName }) {
  return (
    <RootStyle>
      <CardContent
        sx={{
          p: { md: 0 },
          pl: { md: 5 },
          my: 3,
          color: 'grey.800',
        }}
      >
        <Typography gutterBottom variant="h4">
          Yahallo,
          <br /> {!displayName ? 'mother fucker' : displayName}!
        </Typography>

        <Typography variant="body1" sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 480, mx: 'auto' }}>
        Chào mừng các bạn tới project của nhóm Danh Trung và những người bạn. Nếu có gặp bug hay lỗi gì này thì làm ơn đừng report và bỏ trang web này nhé :)))
        </Typography>
      </CardContent>

      <SeoIllustration
        sx={{
          p: 3,
          width: 360,
          margin: { xs: 'auto', md: 'inherit' },
          display: { xs: 'none', md: 'block' },
        }}
      />
    </RootStyle>
  );
}
