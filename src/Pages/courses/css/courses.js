
import styled from 'styled-components'

const Styless = styled.div`
ul.hlList {
    padding: 0;
}
ul.hlList li:after {
    display: block;
    content: '\2605';
    color: #e41a1a;
    margin: 0 30px 0 0;
    position: absolute;
    left: 0;
    top: 0;
}
ul.hlList li {
    display: block;
    position: relative;
    margin-bottom: 5px;
    padding-left: 23px;
}
`

export default Styless