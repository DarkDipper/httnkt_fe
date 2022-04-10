import { Link as RouterLink } from "react-router-dom";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

export default function Logo({ disabledLink = false, sx }) {
    const theme = useTheme();
    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;

    const logo = (
        <Box sx={{ width: 40, height: 40, ...sx }}>
            <svg
                width="40"
                height="40"
                viewBox="0 -7 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M9.94531 35H2.82031L2.86719 31.3203H9.94531C12.3828 31.3203 14.4141 30.8125 16.0391 29.7969C17.6641 28.7656 18.8828 27.3281 19.6953 25.4844C20.5234 23.625 20.9375 21.4531 20.9375 18.9688V16.8828C20.9375 14.9297 20.7031 13.1953 20.2344 11.6797C19.7656 10.1484 19.0781 8.85938 18.1719 7.8125C17.2656 6.75 16.1562 5.94531 14.8438 5.39844C13.5469 4.85156 12.0547 4.57812 10.3672 4.57812H2.67969V0.875H10.3672C12.6016 0.875 14.6406 1.25 16.4844 2C18.3281 2.73437 19.9141 3.80469 21.2422 5.21094C22.5859 6.60156 23.6172 8.28906 24.3359 10.2734C25.0547 12.2422 25.4141 14.4609 25.4141 16.9297V18.9688C25.4141 21.4375 25.0547 23.6641 24.3359 25.6484C23.6172 27.6172 22.5781 29.2969 21.2188 30.6875C19.875 32.0781 18.25 33.1484 16.3438 33.8984C14.4531 34.6328 12.3203 35 9.94531 35ZM5.23438 0.875V35H0.710938V0.875H5.23438Z"
                    fill="url(#paint0_linear_347_2)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_347_2"
                        x1="13"
                        y1="46.5"
                        x2="13"
                        y2="-3.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color={PRIMARY_DARK } />
                        <stop offset="0.544792" stop-color={PRIMARY_MAIN} />
                        <stop offset="1" stop-color={PRIMARY_LIGHT} />
                    </linearGradient>
                </defs>
            </svg>
        </Box>
    );
    // if (disabledLink) {
    //   return <>{logo}</>;
    // }

    return <RouterLink to="/">{logo}</RouterLink>;
}
