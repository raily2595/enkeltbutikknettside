import React, { useState } from 'react';
import Drawer from 'components/Global/Drawer';

function ToggleDrawerButton() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleToggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div>
            <button onClick={handleToggleDrawer}>Åpne/Lukk Skuffen</button>
            <Drawer isOpen={isDrawerOpen} onClose={handleToggleDrawer}>
                <p>Dette er innholdet i skuffen.</p>
            </Drawer>
        </div>
    );
}

export default ToggleDrawerButton;
