import { Dropdown } from '@fluentui/react'
import * as React from 'react'

export const Puzzle:React.FC = () => {
    const [selectedBoard, setSelectedBoard] = React.useState<string>('');

    return (
        <div>
            <header>Lets play a game</header>
            <Dropdown
                options={[
                    {key: '4x4', text: '4 x 4'},
                    {key: '5x5', text: '5 x 5'},
                    {key: '6x6', text: '6 x 6'}
                ]}
                selectedKey={selectedBoard}
                onChange={(event, option) => setSelectedBoard(option?.key?.toString() ?? '')}
            >
                Select a board size
            </Dropdown>
        </div>
    )

}