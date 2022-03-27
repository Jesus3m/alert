import {ReactComponent as DangerIcon} from './danger.svg'
import {ReactComponent as SuccessIcon} from './success.svg'
import {ReactComponent as WarningIcon} from './warning.svg'
import {ReactComponent as InfoIcon} from './info.svg'

export default {
    Danger: () => <DangerIcon fill='red' />,
    Success: () => <SuccessIcon fill='green'/>,
    Warning: () => <WarningIcon fill='orange'/>,
    Info: () => <InfoIcon fill='blue'/>,
}