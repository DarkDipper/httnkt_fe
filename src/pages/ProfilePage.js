import {
    Card,
    CardMedia,
    Typography,
    Grid,
    CardContent,
    CardActionArea,
} from "@mui/material";
export default function ProfilePage() {
    return (
        <>
            <Typography variant="subtitle1">
                Đây là đồ án cuối kỳ của lớp Các phương pháp học thống kê của
                Thầy Nguyễn Đình Hiển
            </Typography>
            <Typography variant="h4">Phân chia công việc</Typography>
            <Grid container spacing={3}>
                <Grid item md={4}>
                    <Card>
                        <CardActionArea
                            component="a"
                            href="https://github.com/tuiiitendinh"
                            target="_blank"
                        >
                            <CardMedia
                                component="img"
                                height="400"
                                image="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/13/835709/Giang-Ho-Mang-Dung-T-02.JPG"
                                alt="Lê Quốc Vinh"
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    Lê Ái Quốc Vinh
                                </Typography>
                                <Typography variant="h6">
                                    MSSV : 4501104277
                                </Typography>
                                <Typography variant="body2">
                                    Crawl và phân loại data
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card>
                        <CardActionArea
                            component="a"
                            href="https://github.com/kun09-tker"
                            target="_blank"
                        >
                            <CardMedia
                                component="img"
                                height="400"
                                image="https://i.redd.it/r58lcdcxbdl11.jpg"
                                alt="Lê Tấn Lộc"
                            />
                            <CardContent>
                                <Typography variant="h5">Lê Tấn Lộc</Typography>
                                <Typography variant="h6">
                                    MSSV : 4501104135
                                </Typography>
                                <Typography variant="body2">
                                    Crawl, phân loại data và back end
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card>
                        <CardActionArea
                            component="a"
                            href="https://github.com/DarkDipper"
                            target="_blank"
                        >
                            <CardMedia
                                component="img"
                                height="400"
                                image="https://wowhay.com/wp-content/uploads/2022/04/gagichad-la-ai-1-1.jpg"
                                alt="Huỳnh Thanh Phong"
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    Huỳnh Thanh Phong
                                </Typography>
                                <Typography variant="h6">
                                    MSSV : 4501104172
                                </Typography>
                                <Typography variant="body2">
                                    Crawl và front end
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <Typography
                variant="h4"
                sx={{
                    mt: 3,
                }}
            >
                Thành viên tưởng niệm
            </Typography>
            <Grid container spacing={3}>
                <Grid item md={4}>
                    <Card>
                        <CardActionArea
                            component="a"
                            href="https://github.com/havaem"
                            target="_blank"
                        >
                            <CardMedia
                                component="img"
                                height="400"
                                image="https://avatars.githubusercontent.com/u/15194041?v=4"
                                alt="Võ Hoài Nam"
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    Võ Hoài Nam
                                </Typography>
                                <Typography variant="h6">
                                    MSSV : 4501104147
                                </Typography>
                                <Typography variant="body2">
                                    Hướng dẫn front end
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card>
                        <CardActionArea
                            component="a"
                            href="https://github.com/trungnd-hcmue"
                            target="_blank"
                        >
                            <CardMedia
                                component="img"
                                height="400"
                                image="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/277590368_2096348513862174_4069930675407546974_n.jpg?stp=dst-jpg_p600x600&_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Dh_kJEiTwswAX8Ev1yZ&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT_yg4BaxWAZGTFvt2KcMmZPjMndHYl8QJBpyBvS2ddZxA&oe=6266C342"
                                alt="Nguyễn Danh Trung"
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    Nguyễn Danh Trung
                                </Typography>
                                <Typography variant="h6">
                                    MSSV : 4501104260
                                </Typography>
                                <Typography variant="body2">
                                    Động viên tinh thần
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card>
                        <CardActionArea
                            component="a"
                            href="https://github.com/chanhhanh"
                            target="_blank"
                        >
                            <CardMedia
                                component="img"
                                height="400"
                                image="https://avatars.githubusercontent.com/u/72182093?v=4"
                                alt="Trần Lê Chánh Hạnh"
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    Trần Lê Chánh Hạnh
                                </Typography>
                                <Typography variant="h6">
                                    MSSV : 4501104069
                                </Typography>
                                <Typography variant="body2">
                                    Hướng dẫn fast API
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
