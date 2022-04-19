import { Container, Typography } from "@mui/material";
import { Code, TableCode, Image } from "../components/render";
const testLesson = {
    ten_chuong: "C++ Function",
    ten_noi_dung: "Tham trị & Tham chiếu trong C++",
    Phan_loai: "Bài học",
    Mo_ta: "Khi học lập trình C++, một tính chất không thể không nhắc đến chính là khả năng truyền tham chiếu và truyền tham trị. Trong bài viết dưới đây hãy cùng eLib.VN tìm hiểu xem chúng là gì, cách sử dụng và khi nào nên sử dụng chúng.",
    Phan_muc: [
        {
            ten_muc: "Phương thức tham trị trong C++ ",
            noi_dung: [
                "Phương thức tham trị trong C++ của các đối số truyền vào một hàm sao chép giá trị thực của một đối số vào tham số chính thức của hàm. Trong trường hợp này, các thay đổi được thực hiện cho tham số bên trong hàm không ảnh hưởng đến đối số.\nTheo mặc định, lập trình C++ sử dụng call by value để chuyển đối số. Nói chung, nó có nghĩa là mã trong một hàm không thể thay đổi các đối số được sử dụng để gọi hàm. Hãy xem xét hàm swap() như sau.\n",
                "Kết quả:\n",
                "Kết quả trên cho thấy rằng không có thay đổi trong các giá trị, mặc dù chúng đã được thay đổi bên trong hàm.\n",
            ],
            bo_sung: [
                {
                    noi_dung:
                        '\n#include <iostream>\n\nusing namespace std;\n\n/* khai bao prototype */\nvoid swap(int x, int y);\n  \nint main() {\n    // dinh nghia cac bien local\n    int a = 100;\n    int b = 200;\n  \n    cout << "Truoc swap, gia tri cua a : " << a << endl;\n    cout << "Truoc swap, gia tri cua b : " << b << endl;\n  \n    // goi ham swap() de hoan doi cac gia tri\n    swap(a, b);\n  \n    cout << "Sau swap, gia tri cua a : " << a << endl;\n    cout << "Sau swap, gia tri cua b : " << b << endl;\n  \n    return 0;\n}\n\n/*\n * ham hoan doi cac gia tri\n */\nvoid swap(int x, int y) {\n    int temp;\n\n    temp = x;\n    x = y;\n    y = temp;\n\n    return;\n}\n',
                    Loai: "code",
                },
                {
                    noi_dung:
                        "\nTruoc swap, gia tri cua a : 100\nTruoc swap, gia tri cua b : 200\nSau swap, gia tri cua a : 100\nSau swap, gia tri cua b : 200\n",
                    Loai: "code",
                },
            ],
        },
        {
            ten_muc: "Phương thức tham chiếu trong C++",
            noi_dung: [
                "Phương thức tham chiếu trong C++ của các đối số truyền cho một hàm sao chép địa chỉ của một đối số vào tham số chính thức. Bên trong hàm, địa chỉ được sử dụng để truy cập đối số thực tế được sử dụng trong cuộc gọi hàm. Nó có nghĩa là những thay đổi được thực hiện cho tham số ảnh hưởng đến đối số đã truyền.\nĐể chuyển một giá trị theo tham chiếu, các con trỏ đối số được chuyển tới các hàm giống như bất kỳ giá trị nào khác. Vì vậy, bạn cần phải khai báo các tham số hàm như các kiểu con trỏ như trong hàm swap(), hoán đổi các giá trị của hai biến số nguyên được trỏ tới, bởi các đối số của chúng. Ví dụ:\n",
                "Kết quả:\n",
                "Kết quả cho thấy sự thay đổi bên trong hàm swap() cũng đã phản ánh bên ngoài hàm, không giống như call by value mà các thay đổi không phản ánh bên ngoài hàm.\n *Chú ý: Không apply phép toán con trỏ vào biến tham chiếu\n",
            ],
            bo_sung: [
                {
                    noi_dung:
                        '\n#include <iostream>\n\nusing namespace std;\n\n/* khai bao prototype */\nvoid swap(int *x, int *y);\n  \nint main() {\n    // dinh nghia cac bien local\n    int a = 100;\n    int b = 200;\n  \n    cout << "Truoc swap, gia tri cua a : " << a << endl;\n    cout << "Truoc swap, gia tri cua b : " << b << endl;\n  \n    // goi ham swap() de hoan doi cac gia tri\n    swap(&a, &b);\n  \n    cout << "Sau swap, gia tri cua a : " << a << endl;\n    cout << "Sau swap, gia tri cua b : " << b << endl;\n  \n    return 0;\n}\n\n/*\n * ham hoan doi cac gia tri\n */\nvoid swap(int *x, int *y) {\n    int temp;\n\n    temp = *x;\n    *x = *y;\n    *y = temp;\n\n    return;\n}\n',
                    Loai: "code",
                },
                {
                    noi_dung:
                        "\nTruoc swap, gia tri cua a : 100\nTruoc swap, gia tri cua b : 200\nSau swap, gia tri cua a : 200\nSau swap, gia tri cua b : 100\n",
                    Loai: "code",
                },
            ],
        },
        {
            ten_muc: "So sánh tham trị và tham chiếu",
            noi_dung: [
                "Hãy cùng nhìn lại bảng sau để thấy được sự khác biệt giữa truyền tham chiếu và truyền tham trị.\n",
                "",
                "Trên đây là bài viết của eLib.VN về Truyền Tham Chiếu Và Truyền Tham Trị Trong C++. Hy vọng qua bài viết của mình, các bạn đã có cái nhìn rõ ràng hơn về truyền tham chiếu và tham trị cũng như sự khác nhau và cách sử dụng của chúng trong thực tế. Chúc các bạn thành công trên con đường lập trình của mình.\n              \n",
            ],
            bo_sung: [
                {
                    noi_dung: {
                        STT: ["1", "2", "3"],
                        "Truyền tham trị": [
                            "Một bản sao giá trị của biến được truyền vào hàm",
                            "Những thay đổi trong hàm được giới hạn trong hàm, không làm thay đổi giá trị của biến được truyền vào hàm",
                            "Đối số trong hàm và tham số chính thức được tạo tại hai vị trí bộ nhớ khác nhau",
                        ],
                        "Truyền tham chiếu": [
                            "Một địa chỉ ô nhớ của biến được truyền vào hàm",
                            "Những thay đổi không chỉ giới hạn trong hàm mà còn làm thay đổi giá trị của biến được truyền vào hàm nếu trong hàm cũng làm thay đổi giá trị biến đó",
                            "Đối số trong hàm và tham số chính thức được tạo tại cùng một vị trí bộ nhớ",
                        ],
                    },
                    Loai: "table",
                },
                {
                    noi_dung:
                        "https://s.elib.vn/images/fckeditor/upload/2020/20201027/images/so-sanh-tham-tri-va-tham-chieu_1603791567.JPG",
                    Loai: "img",
                },
            ],
        },
    ],
};
export default function LessonPage() {
    return (
        <>
            <Typography variant="h3">{testLesson["ten_noi_dung"]}</Typography>
            <Typography variant="subtitle2">{testLesson["Mo_ta"]}</Typography>
            {testLesson["Phan_muc"].map((muc, index) => {
                let contents = [];
                for (
                    let i = 0;
                    i <
                    (muc["noi_dung"].length > muc["bo_sung"].length
                        ? muc["noi_dung"].length
                        : muc["bo_sung"].length);
                    i++
                ) {
                    muc["noi_dung"][i] &&
                        contents.push(
                            <Typography
                                variant="body2"
                                sx={{
                                    whiteSpace: "pre-line",
                                }}
                            >
                                {muc["noi_dung"][i]}
                            </Typography>
                        );
                    if (muc["bo_sung"][i]) {
                        if (muc["bo_sung"][i]["Loai"] === "code") {
                            contents.push(
                                <Code>{muc["bo_sung"][i]["noi_dung"]}</Code>
                            );
                        } else if (muc["bo_sung"][i]["Loai"] === "img") {
                            contents.push(
                                <Image src={muc["bo_sung"][i]["noi_dung"]} />
                            );
                        } else if (muc["bo_sung"][i]["Loai"] === "table") {
                            contents.push(
                                <TableCode>
                                    {muc["bo_sung"][i]["noi_dung"]}
                                </TableCode>
                            );
                        }
                    }
                }
                return (
                    <>
                        <Typography variant="h4">
                            {`${index + 1}. ` + muc["ten_muc"]}
                        </Typography>
                        {contents}
                    </>
                );
            })}
        </>
    );
}
