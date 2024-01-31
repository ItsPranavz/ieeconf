import styles from "@/styles/Home.module.scss";
import PageLayout from "@/components/layout/PageLayout";
import Marquee from "react-fast-marquee";
import { getAssetName } from "@/util/githubPagesImagesUtil";
import { ANNOUNCEMENTS } from "@/data/marquee";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from "@mui/material";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { LaptopMac } from "@mui/icons-material";
import { BiTrophy } from "react-icons/bi";
import "react-vertical-timeline-component/style.min.css";

const events = [
    {
        title: "Last date of submission for regular papers",
        date: "March 31, 2024",
        description: "",
        icon: <LaptopMac />,
    },
    {
        title: "Last date for early bird registration",
        date: "May 31, 2024",
        description: "",
        icon: <BiTrophy />,
    },
    {
        title: "Last date for conference registration",
        date: "June 15, 2024",
        description: "",
        icon: <BiTrophy />,
    },
    {
        title: "Conference dates",
        date: "August 22-24, 2024",
        description: "",
        icon: <BiTrophy />,
    },
];

export default function Home() {
    return (
        <>
            <PageLayout
                title={"Indiscon 2024 | Punjab Engineering College"}
                description={
                    "INDISCON is a flagship annual international conference of the IEEE India Council organized by an IEEE Subsection in INDIA. INDISCON 2024 scheduled during August 22-24, 2024, is being organized by IEEE Chandigarh Subsection along with IEEE India Council. The conference will be hosted by Punjab Engineering College (Deemed to be University), Chandigarh. The conference aims to provide an interdisciplinary platform for the academicians, researchers, industry professionals and research scholars to exchange and share their knowledge, experience & research."
                }
            >
                <Marquee className={styles.marquee_container}>
                    {ANNOUNCEMENTS.map((an, i) => (
                        <p key={i} className={styles.marquee}>
                            {an}
                        </p>
                    ))}
                </Marquee>
                <main
                    className={styles.main}
                    style={{
                        backgroundImage: `url(${getAssetName(
                            "/assets/images/college/pec_chowk.png"
                        )})`,
                        // height: "80vh",
                        // width: "100%",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div className={styles.hero_box}>
                        <p className={styles.sub_heading}>
                            5<sup>th</sup> IEEE India Council International Subsections
                            Conference
                        </p>
                        <h1>
                            INDISCON <span>2024</span>
                        </h1>
                        <div
                            style={{
                                borderBottom: "4px solid #000",
                                width: "50px",
                            }}
                        />
                    </div>
                    <h2 className={styles.theme}>
                        Theme- Science, Technology and Society
                    </h2>
                    <div className={styles.venue_details}>
                        <div className={styles.dates}>
                            <h3>Conference Dates</h3>
                            <p>August 22-24, 2024</p>
                        </div>
                        <div className={styles.venue}>
                            <h3>Venue</h3>
                            <p>Punjab Engineering College</p>
                            <p>(Deemed to be University)</p>
                            <p> Sector 12, Chandigarh, India</p>
                        </div>
                    </div>
                </main>

                <div className={styles.info}>
                    <p>
                        INDISCON is a flagship annual international conference
                        of the IEEE India Council organized by an IEEE
                        Subsection in INDIA. INDISCON 2024 scheduled during
                        August 22-24, 2024, is being organized by IEEE
                        Chandigarh Subsection along with IEEE India Council. The
                        conference will be hosted by Punjab Engineering College
                        (Deemed to be University), Chandigarh. The conference
                        aims to provide an interdisciplinary platform for the
                        academicians, researchers, industry professionals and
                        research scholars to exchange and share their knowledge,
                        experience & research. Papers that are selected and
                        presented at the conference will be submitted to IEEE
                        Xplore.
                    </p>
                </div>

                <div className={styles.banner}>
                    <div className={styles.important_dates}>
                        {/* <h3>Important Dates</h3> */}
                    </div>
                    {/* <TableContainer
                        sx={{
                            maxWidth: "70%",
                            margin: "0 auto",
                            border: "1px solid #eee",
                        }}
                    >
                        <Table>
                            <TableBody>
                                <TableRow hover>
                                    <TableCell>
                                        <b>
                                            Last date of submission of regular
                                            papers
                                        </b>{" "}
                                    </TableCell>
                                    <TableCell>May 15, 2024</TableCell>
                                </TableRow>
                                <TableRow hover>
                                    <TableCell>
                                        <b>
                                            Last date of Early Bird Registration
                                        </b>
                                    </TableCell>
                                    <TableCell> May 31, 2024</TableCell>
                                </TableRow>
                                <TableRow hover>
                                    <TableCell>
                                        <b>
                                            Last Date for conference
                                            registration
                                        </b>{" "}
                                    </TableCell>
                                    <TableCell>June 15, 2024</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer> */}

                    {/* Coz why not a new timeline */}

                    <VerticalTimeline
                        lineColor="rgb(48, 111, 160)"
                        animate={false}
                    >
                        {events.map((event, i) => {
                            return (
                                <VerticalTimelineElement
                                    key={i}
                                    className="vertical-timeline-element--work"
                                    contentStyle={{
                                        background: "rgba(48, 111, 160, 0.2)",
                                        backdropFilter: "blur( 8px )",
                                        boxShadow:
                                            "0 8px 32px 0 rgba( 0, 0, 0, 0.18 )",
                                        borderRadius: "10px",
                                        border: "1px solid rgba( 255, 255, 255, 0.18 )",
                                        position: "relative",
                                        zIndex: "0",
                                    }}
                                    contentArrowStyle={{
                                        borderRight:
                                            "7px solid  rgb(33, 150, 243)",
                                    }}
                                    date={event.date}
                                    dateClassName={styles.date}
                                    iconStyle={{
                                        background: "rgb(2,36,61,0.3)",
                                        color: "#fff",
                                        backdropFilter: "blur(8px)",
                                    }}
                                    icon={event.icon}
                                >
                                    <p className={styles.description}>
                                        {event.title}
                                    </p>
                                </VerticalTimelineElement>
                            );
                        })}
                    </VerticalTimeline>

                    <hr className={styles.divider} />

                    <div className={styles.paper_wrapper}>
                        <div className={styles.register}>
                            <a
                                href="/CFP INDISCON 2024.pdf"
                                target="_blank"
                                referrerPolicy="no-referrer"
                            >
                                <button>Call for Papers</button>
                            </a>
                        </div>
                        <div className={styles.register}>
                            <a
                                href="https://cmt3.research.microsoft.com/INDISCON2024/"
                                target="_blank"
                                referrerPolicy="no-referrer"
                            >
                                <button>Submit your paper</button>
                            </a>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </>
    );
}
