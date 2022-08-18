import '../styles/Styles.css'

function MileStone (){
    return (
        <div className='mileStone'>
            <table>
                <tr>
                    <td rowSpan='2' className='one'><p>Lorem ipsum dolor sit amet, consectetur</p></td>
                    <td colSpan="2" className='two'>Lorem ipsum dolor sit amet, consectetur</td>
                </tr>
                <tr>
                    <td colSpan='1' className='three'>Lorem ipsum dolor sit amet, consectetur</td>
                    <td rowSpan='2' className='four'>Lorem ipsum dolor sit amet, consectetur</td>
                </tr>
                <tr>
                    <td rowSpan='2' colSpan='2' className='five'>Lorem ipsum dolor sit amet, consectetur</td>
                </tr>
                <tr>
                    <td className='six'>Lorem ipsum dolor sit amet, consectetur</td>
                </tr>
            </table>

        </div>
    );
}

export default MileStone;