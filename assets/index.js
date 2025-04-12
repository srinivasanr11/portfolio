import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './logo/vscode.png';
import firebase from './logo/firebase.png';
import figma from './logo/figma.png';
import git from './logo/git.png';
import mongodb from './logo/mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import python from './logo/python.png'
import jupyter_notebook from './logo/jupyter_notebook.png'
import flask from './logo/flask.png'
import react from './logo/react.png'
import mysql from './logo/mysql.png'
import tf from './logo/tf.png'
import company from './company.png'
import adept from './adept.png'

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    python,
    jupyter_notebook,
    flask,
    react,
    mysql,
    tf,
    company,
    adept
};

export const workData = [
    {
        title: 'AI Mouse Control',
        description: 'Gesture Control',
        bgImage: '/work-1.png',
        link:'https://github.com/srinivasanr11/AI-Mouse-Control-System'
    },
    {
        title: 'Covid-19',
        description: 'Predictive Models',
        bgImage: '/work-2.png',
        link:'https://github.com/srinivasanr11/COVID-19-Data-Analysis'
    },
    {
        title: ' Chat-SoC',
        description: 'AI Powered Chatbot',
        bgImage: '/work-3.png',
        link:'https://github.com/srinivasanr11/ChatSoC'
    },
    {
        title: 'Vision-SoC',
        description: 'AI Super-Resolution',
        bgImage: '/work-4.png',
        link:'https://github.com/srinivasanr11/Vision-SoC'
    },
]

export const serviceData = [
    { icon: assets.mobile_icon, title: 'AI/ML Solutions', description: 'Building intelligent AI/ML models to automate tasks, enhance decision-making.' },
    { icon: assets.web_icon, title: 'Web Development', description: 'Building responsive, high-performance websites and web apps tailored to your needs.' },
    { icon: assets.graphics_icon, title: 'Data Science/Analytics', description: 'Data-driven insights, visualization, and predictive analytics.'},
    { icon: assets.ui_icon, title: 'Python Development', description: 'Building efficient, scalable, and AI-powered solutions with Python development.' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python, Java Script, SQL Related Frameworks' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech Artificial Intelligence and Data Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 15+ projects' }
];

export const toolsData = [
    assets.python, assets.jupyter_notebook, assets.react, assets.flask, assets.tf, assets.git
];


export const experience = [
    {
      icon: assets.company,
      title: 'Pricol Ltd - Automotive Industry',
      Role: 'Deep Learning Intern',
      duration: '3 Months',
      description:
        "Developed a CNN-based model using OpenCV and Keras for telltale sign detection in instrument cluster images. Implemented preprocessing and anomaly detection for brightness, color, segment cutoffs, and scratches, achieving 90–95% accuracy.",
    },
    {
      icon: assets.adept,
      title: 'ADEPT Association',
      Role: 'Coding Club Coordinator',
      duration: '1 Year',
      description:
        "Led coding sessions, workshops, and initiatives to foster collaboration, enhance technical skills, and support continuous learning within the club.",
    },
  ];
  