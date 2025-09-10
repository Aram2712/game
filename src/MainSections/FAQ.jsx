
import './Sections.scss';
import bg1 from '../assets/fagbg1.svg';
import bg2 from '../assets/faqbg2.svg';
import { useState } from 'react';
import { Element } from 'react-scroll';
import { RiArrowUpSLine } from "react-icons/ri";

function FAQ() {

    const [content, setContent] = useState([
        {
            id: 1,
            title: 'How can I register?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            isOpen: false
        },
        {
            id: 2,
            title: 'How can I register?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            isOpen: false
        },
        {
            id: 3,
            title: 'How can I register?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            isOpen: false
        },
        {
            id: 4,
            title: 'How can I register?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            isOpen: false
        },
        {
            id: 5,
            title: 'How can I register?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            isOpen: false
        },
        {
            id: 6,
            title: 'How can I register?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            isOpen: false
        },
        {
            id: 7,
            title: 'How can I register?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            isOpen: false
        },
        {
            id: 8,
            title: 'How can I register?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            isOpen: false
        },
        {
            id: 9,
            title: 'How can I register?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            isOpen: false
        },
        {
            id: 10,
            title: 'How can I register?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            isOpen: false
        }
    ])

    const openCurrentBox = (item) => {
        setContent(content => content.map(elem => {
            if (elem.id === item.id) {
                return {
                    ...elem,
                    isOpen: !elem.isOpen
                }
            }
            else return { ...elem, isOpen: false }
        }))
    }

    return (
        <Element name="faq" style={{ width: '100%' }}>
            <section className='faqContainer'>
                <img src={bg2} className='faqBackgroundImage1' />
                <div className='faqTextContentBox'>
                    <h4 className='chooseUsTitle'>Frequently Asked Questions</h4>
                    {
                        content.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    border: "1px solid #FFFFFF1A",
                                    borderRadius: "8px",
                                    marginBottom: "10px",
                                    overflow: "hidden",
                                    width: '100%',
                                }}
                            >
                                <div
                                    onClick={() => openCurrentBox(item)}
                                    style={{
                                        padding: "12px",
                                        cursor: "pointer",
                                        backgroundColor: '#191919',
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        fontWeight: "600",
                                        color: item.isOpen ? '#FF9F19' : 'white',
                                        fontSize: '16px'
                                    }}
                                >
                                    {item.title}
                                    <span
                                        style={{
                                            border: '1px solid #FFFFFF1A',
                                            padding: '5px',
                                            borderRadius: '5px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: item.isOpen ? "#FFFFFF1A" : ""
                                        }}
                                    >
                                        <RiArrowUpSLine
                                            style={{
                                                transform: !item.isOpen ? "rotate(180deg)" : "rotate(0)",
                                                transition: "0.5s",
                                                color: item.isOpen ? 'white' : '#FFFFFF4D',
                                                fontSize: '28px'
                                            }}
                                        />
                                    </span>
                                </div>
                                <div
                                    style={{
                                        maxHeight: item.isOpen ? "500px" : "0",
                                        overflow: "hidden",
                                        transition: "max-height 0.7s ease",
                                        backgroundColor: '#191919',
                                        color: 'white',
                                        padding: "0 16px",
                                        fontWeight: '300',
                                        fontSize: '14px',
                                    }}
                                    className='faqHiddenBox'
                                >
                                    <p style={{marginBottom:'15px'}}>{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <img src={bg1} className='faqBackgroundImage2' />
            </section>
        </Element>
    )
}

export default FAQ