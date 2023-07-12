import React from 'react'
import './Table.css'

const Table = () => {
    return (
        <table className='table'>
            <tr>
                <th scope='col'>Sr. No.</th>
                <th scope='col'>Name</th>
                <th scope='col'>Course</th>
                <th scope='col'>Fees</th>
                <th scope='col'>Due date</th>
            </tr>
            <tr>
                <td>192</td>
                <td>
                    <div className='user_info'>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px', borderRadius: '50%' }}
                        />
                        <div className='ms-3'>
                            <p className='fw-bold mb-1'>John Doe</p>
                        </div>
                    </div>
                </td>
                <td>
                    Bsc.
                </td>
                <td>
                    $3999
                </td>
                <td>03/16/2019</td>
            </tr>
            <tr>
                <td>204</td>
                <td>
                    <div className='d-flex align-items-center'>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                        <div className='ms-3'>
                            <p className='fw-bold mb-1'>Katty Johnson</p>
                        </div>
                    </div>
                </td>
                <td>
                    Comm.
                </td>
                <td>
                    $1599
                </td>
                <td>03/22/2019</td>
            </tr>
            <tr>
                <td>356</td>
                <td>
                    <div className='d-flex align-items-center'>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/9.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                        <div className='ms-3'>
                            <p className='fw-bold mb-1'>Matt Parker</p>
                        </div>
                    </div>
                </td>
                <td>
                    Scien.
                </td>
                <td>
                    $10999
                </td>
                <td>04/04/2019</td>
            </tr>
            <tr>
                <td>1007</td>
                <td>
                    <div className='d-flex align-items-center'>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                        <div className='ms-3'>
                            <p className='fw-bold mb-1'>Nicole John</p>
                        </div>
                    </div>
                </td>
                <td>
                    Comm.
                </td>
                <td>
                    $1599
                </td>
                <td>04/15/2019</td>
            </tr>
            <tr>
                <td>1008</td>
                <td>
                    <div className='d-flex align-items-center'>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/5.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                        <div className='ms-3'>
                            <p className='fw-bold mb-1'>Jaqline peter</p>
                        </div>
                    </div>
                </td>
                <td>
                    Comm.
                </td>
                <td>
                    $1599
                </td>
                <td>04/29/2019</td>
            </tr>
        </table>
    )
}

export default Table