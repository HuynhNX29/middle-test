import React from 'react';
import Navbar from './Navbar';
import { Image, Card, List, Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
// import './css/screen.css';
import '../css/screen.css';



const Screen = () => {

    return (
        <div style={{}} >
            <Navbar />

            <div style={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: 32,
                // lineHeight: 32,
                color: '#FFFFFF',
                position: 'relative',
                left: 85,
                top: 36,
                // textAlign: 'center'
            }}>Explore</div>

            <div style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: 22,
                // lineHeight: 32,
                color: '#868686',
                position: 'relative',
                left: 85,
                top: 36,
                // textAlign: 'center'
            }}>What are you gonna watch today ?</div>

            <div className='carousel slide'>
                {/* <Image preview={false}
                    style={{
                        position: 'relative',
                        width: 1170,
                        height: 400,
                        top: 60,
                        left: 90,
                        borderRadius: 12

                    }}
                    src='https://s3-alpha-sig.figma.com/img/a159/88d8/3feb9d7a97a93cac67eb291272ab227e?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sc3xHHXgYUCqpMiT5MYOeJR4lLqnR9eUgGxvB~LP~AjBEvX0AlqroLM6A2PKPMjP93VPs4tZf2UiBMtX05T4Rr8jFXu4~-~~A5sxS-tlHtRRsu7gtoSjnhA8acnff~jrtw6aCaIILIrjmcjXuIJnp~QInwKyIAArHzxAzETDC4rWvbG~30DZD56ggJo5h5r5Nv1Aa--iJQvlse6PTAg4iHwuVNqfKeSaNDmSIwonHJdqyPMp~r~2Eh0BXL2tdoc~MWo4o7j-OGRYQBgjtsXpG0b-tjNMs6VzLsSIOoo7e3qtDG-iBnz9kjTHTFGBXrR3wzCE14-bVqtIlaj3AEET7g__'

                /> */}

                <div className='carousel-inner'>
                    <div class="carousel-item active">


                        {/* <Image preview={false}

                            style={{
                                // background: 'linear-gradient(269.96 deg, rgba(29, 29, 29, 0), rgba(29, 29, 29, 0.8))',
                                position: 'relative',
                                width: 1170,
                                height: 400,
                                top: 60,
                                left: 90,
                                borderRadius: 12,


                            }}
                            src='https://s3-alpha-sig.figma.com/img/a159/88d8/3feb9d7a97a93cac67eb291272ab227e?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sc3xHHXgYUCqpMiT5MYOeJR4lLqnR9eUgGxvB~LP~AjBEvX0AlqroLM6A2PKPMjP93VPs4tZf2UiBMtX05T4Rr8jFXu4~-~~A5sxS-tlHtRRsu7gtoSjnhA8acnff~jrtw6aCaIILIrjmcjXuIJnp~QInwKyIAArHzxAzETDC4rWvbG~30DZD56ggJo5h5r5Nv1Aa--iJQvlse6PTAg4iHwuVNqfKeSaNDmSIwonHJdqyPMp~r~2Eh0BXL2tdoc~MWo4o7j-OGRYQBgjtsXpG0b-tjNMs6VzLsSIOoo7e3qtDG-iBnz9kjTHTFGBXrR3wzCE14-bVqtIlaj3AEET7g__'

                        /> */}
                        <div >
                            <img id='gradientX'  style={{
                                position: 'relative',
                                width: 1170,
                                height: 400,
                                top: 60,
                                left: 90,
                                borderRadius: 12
                            }}
                                src="https://s3-alpha-sig.figma.com/img/a159/88d8/3feb9d7a97a93cac67eb291272ab227e?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sc3xHHXgYUCqpMiT5MYOeJR4lLqnR9eUgGxvB~LP~AjBEvX0AlqroLM6A2PKPMjP93VPs4tZf2UiBMtX05T4Rr8jFXu4~-~~A5sxS-tlHtRRsu7gtoSjnhA8acnff~jrtw6aCaIILIrjmcjXuIJnp~QInwKyIAArHzxAzETDC4rWvbG~30DZD56ggJo5h5r5Nv1Aa--iJQvlse6PTAg4iHwuVNqfKeSaNDmSIwonHJdqyPMp~r~2Eh0BXL2tdoc~MWo4o7j-OGRYQBgjtsXpG0b-tjNMs6VzLsSIOoo7e3qtDG-iBnz9kjTHTFGBXrR3wzCE14-bVqtIlaj3AEET7g__" alt="" />


                        </div>

                        <div class="carousel-caption d-none d-md-block">
                            <p style={{
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                                fontSize: 36,
                                color: '#FFFFFF',
                                position: 'relative',
                                top: 30,
                                left: -450,

                            }}>Weather With You</p>
                            <p style={{
                                fontFamily: 'Poppins',
                                fontWeight: 400,
                                fontSize: 16,
                                color: '#FFFFFF',
                                textAlign: 'start',
                                position: 'relative',
                                top: 30,
                                left: -80,

                            }}>Corrupt politicians, frenzied nationalists, and other warmongering<br />forces constantly jeopardize the thin veneer of peace between <br /> neighboring countries Ostania and Westalis. </p>
                        </div>
                    </div>
                </div>

            </div>
            <br />
            <br />
            <div style={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: 36,
                // lineHeight: 32,
                color: '#FFFFFF',
                position: 'relative',
                left: 85,
                top: 36,
                // textAlign: 'center'
            }}>New Release</div>
            <br />
            {/* <Row>
                <Col span={4}>
                    <Card style={{
                        width: 170,
                        height: 284.11,
                        position: 'relative',
                        left: 85,
                        top: 36,
                    }}
                        cover={<img style={{ height: 253.84, width: '100%' }} src='https://s3-alpha-sig.figma.com/img/6ea2/8ccf/1ea53edb90b65e5d33d48205a91a17a0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PMACzappMo5KXXU~J7SXKcAO-5ZAqZpco7Io-40yWYUpDHlKGCGuFaZn1VGmkz4xE6yZZBs1GDEpOqHLBNsWLeitFZ7rQQupbk5JrIpx8V0u3R8MFy1XK3DzXSSkAFYXQMTy~Xps5gbaymsuQhQIR7FxUVg7ZCUkW9D5IaLcm6Sa~-IoyeVD9ibGJ~WHnBFLh8bu9C4wo2WL2pDsZ359TTKFLiMU2Z8DrfqKXpMJiYh8orblY6BVkiN2TQSZGQT4HTIPuqy5AbWnxbNPs5MdDM5ok1U~noPxQ-DSePSP58AeSM6RBrLSJRYDtbUJYJ9yISwMoSeN89FSqgEiWPnU9A__' />}>
                        <Meta style={{
                            position: 'relative',
                            left: 10,
                            top: -50,
                            color: 'white'
                        }}
                            title='Episode 1018'
                            textAlign='center'
                            description='One Piece' />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card style={{
                        width: 170,
                        height: 284.11,
                        position: 'relative',
                        left: 85,
                        top: 36,
                    }}
                        cover={<img style={{ height: 253.84, width: '100%' }} src='https://s3-alpha-sig.figma.com/img/14e9/6cd4/177b17eb1ee85d84d09efcc0fa3e1b69?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jg4FogXROuXDJIdeqkR6rBBavO~jCy8IVsUq8ZWCboOZrX~mTMZuM9x2WyJU066xaZ1uYKmX36D9lRSAk3aOq98OhmSFM4GWotnmJvw3C7sR74j6p2oEuS2-jOg980W6HuZKgNAofnwOrOHHuPJDNTaeWbSNDZ3UwydOELMZRk2h~OiptowUHCRZAtRJ9YOP5GE38cFZWSUcHJ9jX4C2hYy9j7PlqxAawPlnFBMLNJHnUxgM1nBpFXWJAUDDZlPxAsKz0dYG2qORyC8Xdj4-wgu4g46gbUG4JBRSzUY7E7uU4Ry8YoGOUZBUCwW3eeg1CBC9~mltnOsHBnuhrWWNjA__' />}>
                        <Meta style={{
                            position: 'relative',
                            left: 10,
                            top: -50,
                            color: 'white'
                        }}
                            title='Episode 1018'
                            textAlign='center'
                            description='One Piece' />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card style={{
                        width: 170,
                        height: 284.11,
                        position: 'relative',
                        left: 85,
                        top: 36,
                    }}
                        cover={<img style={{ height: 253.84, width: '100%' }} src='https://s3-alpha-sig.figma.com/img/894b/a9f6/56cb8d734f17921555e3af4d5fbfd914?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BlkHI-XZtNU2jh6cQtG7HeEeeQUKNxiKoNVjuwV6v7OkJF6ZRbxNXr-UwLegEgOB2sEJikHpokvdhWuzLoKc87XCG0on4hDOOW0~gYkfk2qjBChw0GI3nKxbTMeJwzBYDuro9orhdhoXPvgtuYqGWOlAdFE24aCmrq45e8Lc7hIrzHi2l4qY5P4oukFoI4IhYixaEtvHiVUtW2YJLU2cJd7s9ITKz7yE6utO1DntSyCDRrnzBSYy2BVFNZldA2TRqmVb3ePWDjFrDSZ-oUFDtXHEwqhbLTIoYoZO3ZO9lfFD8U1Ag30DblY~Do0RF5KOJINuGcRCEBVaVXYm9imCwg__' />}>
                        <Meta style={{
                            position: 'relative',
                            left: 10,
                            top: -50,
                            color: 'white'
                        }}
                            title='Episode 1018'
                            textAlign='center'
                            description='One Piece' />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card style={{
                        width: 170,
                        height: 284.11,
                        position: 'relative',
                        left: 85,
                        top: 36,
                    }}
                        cover={<img style={{ height: 253.84, width: '100%' }} src='https://s3-alpha-sig.figma.com/img/f045/43fa/554deceb9b7c888745b5f43729a208d3?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j4yF3Bp93FVeCmgJ24mz2mtfllHZhcrpeED-JzYANDlsv~hiOCBeSMA8JhOMkOWeU33Bx0Pqgg8Fzxw7V95VSkXrgZaXSmroEHdNSUvWfTxcreElWVR6p7cSyNIoziIFK49Wj3pf~xXxYrMBn1Y~wzIYWN~gLPKbV~7atpz-0g9984rtQkpTAQPY76~0ko6PW3LWEMLEW1fFr~MDY6h~OAiuTLQKxisiDSgUuE5n~4SMMsVZYeJc8ehbdULh~UF44LNCjlMU~VIwBWExlIvYqkm~S5V9BOl7bk~7zEK9mN0Wp27Qz9szx~k5kLHdK3aWnT-27bdEZqHOxE-1rs80tA__' />}>
                        <Meta style={{
                            position: 'relative',
                            left: 10,
                            top: -50,
                            color: 'white'
                        }}
                            title='Episode 1018'
                            textAlign='center'
                            description='One Piece' />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card style={{
                        width: 170,
                        height: 284.11,
                        position: 'relative',
                        left: 85,
                        top: 36,
                    }}
                        cover={<img style={{ height: 253.84, width: '100%' }} src='https://s3-alpha-sig.figma.com/img/e5ab/b83d/eb0371790de015fd2dc503be277bd97b?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NOBs-inRtwEzhjhoQzoDiXv56r66V5sfdD5r9nviLe8XRgIabGVoWRLZHkVlMX90ToOPymCCldMzM3n1GU8ohjoZuKMHSmeJBQ1crdax2qYWtT6LB2SsW99bFNNNdpf~I8O1gZau8sTluqes7RJG27XbsEvF9coal9Qw7PXp4Gd2Phxe3BM~jRzB~iHIH8yFsNem2lUMEc06dW8W2xgc93fQqOY5g6VN7JyjeZmjtyLoGLm0J6KVcPuml~STgibuWffJ09l-M0wLBy3Iin0IFGQ-dBLfgueJQa1ya-qx2Fy-~fpBWqp3jf8ysWFHcpX9GKEraWqMyod~VDiyoH8tsA__' />}>
                        <Meta style={{
                            position: 'relative',
                            left: 10,
                            top: -50,
                            color: 'white'
                        }}
                            title='Episode 1018'
                            textAlign='center'
                            description='One Piece' />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card style={{
                        width: 170,
                        height: 284.11,
                        position: 'relative',
                        left: 85,
                        top: 36,
                    }}
                        cover={<img style={{ height: 253.84, width: '100%' }} src='https://s3-alpha-sig.figma.com/img/2fb6/7ff5/5e3abe50a16b45c46b38b61de4c3c1b2?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LMuB0Uqojyh8Zh06E6BHpAhu6Ra0jbYafMjLEpi77C0DvbYdx4oDi58wNQYcoTbszzAtMwdbt7rrTC7K2~kRPAC-0g6i6oqYAd-LmdabMuEtCD2lDAsNjPej9I5d1vVSDBfqAnKvKK9CUBP~ypTdH4cHNBy6ykM9QOx5fPAR10zlIV8ZlmxBRVd9MGAd-iWagTFWrrgKUEVWRSO5B28FxEyYuhYyYwTRPYw49kK7MTL9m0eNBuiUPEskkTH62B8Dea5OVG3850vfmK~XDdaSv62IH0lfEXcMXLnXr-2ylvpUMPCwHsxSmGG5Ts~SYUPEbxWVhAl2zSy8gBFzc0i2PA__' />}>
                        <Meta style={{
                            position: 'relative',
                            left: 10,
                            top: -50,
                            color: 'white'
                        }}
                            title='Episode 1018'
                            textAlign='center'
                            description='One Piece' />
                    </Card>
                </Col>
            </Row> */}

            <div className="boxmodel-list">
                <div>
                    <Card style={{
                        width: 170,
                        height: 284.11,
                        position: 'relative',
                        left: 85,
                        top: 36,
                    }}
                        cover={<img style={{ height: 253.84, width: '100%' }} src='https://s3-alpha-sig.figma.com/img/6ea2/8ccf/1ea53edb90b65e5d33d48205a91a17a0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PMACzappMo5KXXU~J7SXKcAO-5ZAqZpco7Io-40yWYUpDHlKGCGuFaZn1VGmkz4xE6yZZBs1GDEpOqHLBNsWLeitFZ7rQQupbk5JrIpx8V0u3R8MFy1XK3DzXSSkAFYXQMTy~Xps5gbaymsuQhQIR7FxUVg7ZCUkW9D5IaLcm6Sa~-IoyeVD9ibGJ~WHnBFLh8bu9C4wo2WL2pDsZ359TTKFLiMU2Z8DrfqKXpMJiYh8orblY6BVkiN2TQSZGQT4HTIPuqy5AbWnxbNPs5MdDM5ok1U~noPxQ-DSePSP58AeSM6RBrLSJRYDtbUJYJ9yISwMoSeN89FSqgEiWPnU9A__' />}>
                        {/* <Meta style={{
                            position: 'relative',
                            left: 10,
                            top: -50,
                            color: 'white',                           
                        }}
                            title='Episode 1018'
                            textAlign='center'
                            description='One Piece' /> */}
                        <div>
                            <p style={{
                                fontfamily: 'Poppins',
                                fontWeight: 400,
                                fontSize: 16,
                                // textAlign: 'center',
                                color: 'black',
                                position: 'relative',
                                left: 20,
                                top: -20,
                            }}>One Pieces</p>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card style={{
                        width: 170,
                        height: 284.11,
                        position: 'relative',
                        left: 85,
                        top: 36,
                    }}
                        cover={<img style={{ height: 253.84, width: '100%' }} src='https://s3-alpha-sig.figma.com/img/14e9/6cd4/177b17eb1ee85d84d09efcc0fa3e1b69?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jg4FogXROuXDJIdeqkR6rBBavO~jCy8IVsUq8ZWCboOZrX~mTMZuM9x2WyJU066xaZ1uYKmX36D9lRSAk3aOq98OhmSFM4GWotnmJvw3C7sR74j6p2oEuS2-jOg980W6HuZKgNAofnwOrOHHuPJDNTaeWbSNDZ3UwydOELMZRk2h~OiptowUHCRZAtRJ9YOP5GE38cFZWSUcHJ9jX4C2hYy9j7PlqxAawPlnFBMLNJHnUxgM1nBpFXWJAUDDZlPxAsKz0dYG2qORyC8Xdj4-wgu4g46gbUG4JBRSzUY7E7uU4Ry8YoGOUZBUCwW3eeg1CBC9~mltnOsHBnuhrWWNjA__' />}>
                        <div>
                            <p style={{
                                fontfamily: 'Poppins',
                                fontWeight: 400,
                                fontSize: 16,
                                // textAlign: 'center',
                                color: 'black',
                                position: 'relative',
                                left: 10,
                                top: -40,
                            }}>Boruto Naruto <br />Next Generations</p>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card style={{
                        width: 170,
                        height: 284.11,
                        position: 'relative',
                        left: 85,
                        top: 36,
                    }}
                        cover={<img style={{ height: 253.84, width: '100%' }} src='https://s3-alpha-sig.figma.com/img/894b/a9f6/56cb8d734f17921555e3af4d5fbfd914?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BlkHI-XZtNU2jh6cQtG7HeEeeQUKNxiKoNVjuwV6v7OkJF6ZRbxNXr-UwLegEgOB2sEJikHpokvdhWuzLoKc87XCG0on4hDOOW0~gYkfk2qjBChw0GI3nKxbTMeJwzBYDuro9orhdhoXPvgtuYqGWOlAdFE24aCmrq45e8Lc7hIrzHi2l4qY5P4oukFoI4IhYixaEtvHiVUtW2YJLU2cJd7s9ITKz7yE6utO1DntSyCDRrnzBSYy2BVFNZldA2TRqmVb3ePWDjFrDSZ-oUFDtXHEwqhbLTIoYoZO3ZO9lfFD8U1Ag30DblY~Do0RF5KOJINuGcRCEBVaVXYm9imCwg__' />}>
                        <div>
                            <p style={{
                                fontfamily: 'Poppins',
                                fontWeight: 400,
                                fontSize: 16,
                                // textAlign: 'center',
                                color: 'black',
                                position: 'relative',
                                left: 20,
                                top: -20,
                            }}>Spy X Family</p>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card style={{
                        width: 170,
                        height: 284.11,
                        position: 'relative',
                        left: 85,
                        top: 36,
                    }}
                        cover={<img style={{ height: 253.84, width: '100%' }} src='https://s3-alpha-sig.figma.com/img/f045/43fa/554deceb9b7c888745b5f43729a208d3?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j4yF3Bp93FVeCmgJ24mz2mtfllHZhcrpeED-JzYANDlsv~hiOCBeSMA8JhOMkOWeU33Bx0Pqgg8Fzxw7V95VSkXrgZaXSmroEHdNSUvWfTxcreElWVR6p7cSyNIoziIFK49Wj3pf~xXxYrMBn1Y~wzIYWN~gLPKbV~7atpz-0g9984rtQkpTAQPY76~0ko6PW3LWEMLEW1fFr~MDY6h~OAiuTLQKxisiDSgUuE5n~4SMMsVZYeJc8ehbdULh~UF44LNCjlMU~VIwBWExlIvYqkm~S5V9BOl7bk~7zEK9mN0Wp27Qz9szx~k5kLHdK3aWnT-27bdEZqHOxE-1rs80tA__' />}>
                        <div>
                            <p style={{
                                fontfamily: 'Poppins',
                                fontWeight: 400,
                                fontSize: 16,
                                // textAlign: 'center',
                                color: 'black',
                                position: 'relative',
                                left: 20,
                                top: -35,
                            }}>Shingeki no <br /> kyoujin</p>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card style={{
                        width: 170,
                        height: 284.11,
                        position: 'relative',
                        left: 85,
                        top: 36,
                    }}
                        cover={<img style={{ height: 253.84, width: '100%' }} src='https://s3-alpha-sig.figma.com/img/e5ab/b83d/eb0371790de015fd2dc503be277bd97b?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NOBs-inRtwEzhjhoQzoDiXv56r66V5sfdD5r9nviLe8XRgIabGVoWRLZHkVlMX90ToOPymCCldMzM3n1GU8ohjoZuKMHSmeJBQ1crdax2qYWtT6LB2SsW99bFNNNdpf~I8O1gZau8sTluqes7RJG27XbsEvF9coal9Qw7PXp4Gd2Phxe3BM~jRzB~iHIH8yFsNem2lUMEc06dW8W2xgc93fQqOY5g6VN7JyjeZmjtyLoGLm0J6KVcPuml~STgibuWffJ09l-M0wLBy3Iin0IFGQ-dBLfgueJQa1ya-qx2Fy-~fpBWqp3jf8ysWFHcpX9GKEraWqMyod~VDiyoH8tsA__' />}>
                        <div>
                            <p style={{
                                fontfamily: 'Poppins',
                                fontWeight: 400,
                                fontSize: 16,
                                // textAlign: 'center',
                                color: 'black',
                                position: 'relative',
                                left: 0,
                                top: -20,
                            }}>Captain Tsubasa</p>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card style={{
                        width: 170,
                        height: 284.11,
                        position: 'relative',
                        left: 85,
                        top: 36,
                    }}
                        cover={<img style={{ height: 253.84, width: '100%' }} src='https://s3-alpha-sig.figma.com/img/2fb6/7ff5/5e3abe50a16b45c46b38b61de4c3c1b2?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LMuB0Uqojyh8Zh06E6BHpAhu6Ra0jbYafMjLEpi77C0DvbYdx4oDi58wNQYcoTbszzAtMwdbt7rrTC7K2~kRPAC-0g6i6oqYAd-LmdabMuEtCD2lDAsNjPej9I5d1vVSDBfqAnKvKK9CUBP~ypTdH4cHNBy6ykM9QOx5fPAR10zlIV8ZlmxBRVd9MGAd-iWagTFWrrgKUEVWRSO5B28FxEyYuhYyYwTRPYw49kK7MTL9m0eNBuiUPEskkTH62B8Dea5OVG3850vfmK~XDdaSv62IH0lfEXcMXLnXr-2ylvpUMPCwHsxSmGG5Ts~SYUPEbxWVhAl2zSy8gBFzc0i2PA__' />}>
                        <div>
                            <p style={{
                                fontfamily: 'Poppins',
                                fontWeight: 400,
                                fontSize: 16,
                                // textAlign: 'center',
                                color: 'black',
                                position: 'relative',
                                left: 30,
                                top: -20,
                            }}>Aoashi</p>
                        </div>
                    </Card>
                </div>
            </div>


        </div>
    );
}

// style={{ width: 170, height: 305.83 }}
export default Screen;
