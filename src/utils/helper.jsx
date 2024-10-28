import React from 'react';
import NoPriorityIcon from '../assets/icons_FEtask/three_dot_menu.svg';
import LowPriorityIcon from '../assets/icons_FEtask/Img - Low Priority.svg';
import MediumPriorityIcon from '../assets/icons_FEtask/Img - Medium Priority.svg';
import HighPriorityIcon from '../assets/icons_FEtask/Img - High Priority.svg';
import UrgentPriorityIcon from '../assets/icons_FEtask/SVG - Urgent Priority colour.svg';

import BacklogIcon from '../assets/icons_FEtask/Backlog.svg';
import TodoIcon from '../assets/icons_FEtask/To-do.svg';
import InProgressIcon from '../assets/icons_FEtask/in-progress.svg';
import DoneIcon from '../assets/icons_FEtask/Done.svg';
import CanceledIcon from '../assets/icons_FEtask/Cancelled.svg';

export const getPriorityIcon = (priorityLevel) => {
    const iconSize = { width: '14px' };
    switch (priorityLevel) {
        case "No priority": 
            return <img src={NoPriorityIcon} alt="No priority" style={iconSize} />;
        case "Low": 
            return <img src={LowPriorityIcon} alt="Low priority" style={iconSize} />;
        case "Medium": 
            return <img src={MediumPriorityIcon} alt="Medium priority" style={iconSize} />;
        case "High": 
            return <img src={HighPriorityIcon} alt="High priority" style={iconSize} />;
        case "Urgent": 
            return <img src={UrgentPriorityIcon} alt="Urgent priority" style={iconSize} />;
        default: 
            return <img src={UrgentPriorityIcon} alt="Urgent priority" style={iconSize} />;
    }
};

export const getStatusIcon = (taskStatus) => {
    const statusIconSize = { width: '16px' };
    switch (taskStatus) {
        case "Backlog": 
            return <img src={BacklogIcon} alt="Backlog" style={{ width: '24px' }} />;
        case "Todo": 
            return <img src={TodoIcon} alt="Todo" style={{ width: '24px' }} />;
        case "In progress": 
            return <img src={InProgressIcon} alt="In progress" style={statusIconSize} />;
        case "Done": 
            return <img src={DoneIcon} alt="Done" style={statusIconSize} />;
        case "Canceled": 
            return <img src={CanceledIcon} alt="Canceled" style={statusIconSize} />;
        default: 
            return <img src={CanceledIcon} alt="Canceled" style={statusIconSize} />;
    }
};
