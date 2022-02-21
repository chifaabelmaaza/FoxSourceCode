import React, { useState, useEffect } from 'react';
import '../../scss/user.scss';
import { Avatar } from '@mui/material';

import { useForm } from 'react-hook-form';
import userService from '../../services/User.service';

function Account({ user }) {
  const [devlopingExperience, setDevlopingExperience] = useState(
    user?.devlopingExperience ? user?.devlopingExperience : ''
  );
  const [devType, setDevType] = useState(
    user?.devloperType ? user?.devloperType : ''
  );
  const [publicContact, setPublicContact] = useState(
    user?.publicContact ? user?.publicContact : ''
  );

  function clean(obj) {
    for (var propName in obj) {
      if (
        obj[propName] === null ||
        obj[propName] === undefined ||
        obj[propName] === ''
      ) {
        delete obj[propName];
      }
    }
    return obj;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  const updateDevUser = (e) => {
    e.preventDefault();
    let data = {};

    data.devloperType = devType;
    data.operatingSystem = checkedDevTypes.join(';');
    data.frameworks = checkedFrameworks.join(';');
    data.publicContact = publicContact;
    data.devlopingExperience = devlopingExperience;
    data = clean(data);
    userService
      .updateUSer(data)
      .then((res) => {})
      .catch((err) => {
        console.log(
          err.response.data?.message
            ? err.response.data?.message
            : err.response.data?.error
        );
      });
  };

  const [email, setEmail] = useState(user?.email);
  const [fulName, setFullName] = useState(user?.fullName);
  const [username, setUsername] = useState(user?.username);
  const [paypalEmail, setPaypalEmail] = useState(user?.paypalEmail);
  const updateUser = (e) => {

    e.preventDefault();
    const data = {}
    data.email = email
    data.fulName = fulName
    data.username = username
    data.empaypalEmailail = paypalEmail
    console.log("hello")
    userService
      .updateUSer(data)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(
          err.response.data?.message
            ? err.response.data?.message
            : err.response.data?.error
        );
      });
  };

  const [avatar, setAvatar] = useState();
  const updateAvatar = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', avatar);
    userService
      .updateAvatar(formData)
      .then((res) => {})
      .catch((err) => {
        console.log(
          err.response.data?.message
            ? err.response.data?.message
            : err.response.data?.error
        );
      });
  };

  const updatePassword = (data) => {
    // return console.log(data)
    userService
      .updatePassword(data)
      .then((res) => {})
      .catch((err) => {
        console.log(
          err.response.data?.message
            ? err.response.data?.message
            : err.response.data?.error
        );
      });
  };

  const devTypes = ['iOS', 'Android', 'Unity'];
  const [checkedDevTypes, setCheckedDevTypes] = useState([]);

  const handleCheckDevTypes = (event) => {
    var updatedList = [...checkedDevTypes];
    if (event.target.checked) {
      updatedList = [...checkedDevTypes, event.target.value];
    } else {
      updatedList.splice(checkedDevTypes.indexOf(event.target.value), 1);
    }
    setCheckedDevTypes(updatedList);
  };

  const frameworks = [
    'Native iOS',
    'Native Android',
    'Cocos2d',
    'Unity',
    'Swift',
    'Xcode',
    'PHP',
    'JavaScript',
    'C#',
    'C++',
    'Java',
  ];
  const [checkedFrameworks, setCheckedFrameworks] = useState([]);
  const handleCheckFrameworks = (event) => {
    var updatedList = [...checkedFrameworks];
    if (event.target.checked) {
      updatedList = [...checkedFrameworks, event.target.value];
    } else {
      updatedList.splice(checkedFrameworks.indexOf(event.target.value), 1);
    }
    setCheckedFrameworks(updatedList);
  };

  return (
    <div className='account'>
      <div className='accordion' id='accordionExample'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingOne'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='false'
                aria-controls='collapseOne'
              >
                My Account
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <form onSubmit={updateUser}>
                  <div className='my-3'>
                    <div className='input-group'>
                      <span className='input-group-text' id='email-address'>
                        <i className='fas fa-envelope' aria-hidden='true'></i>
                      </span>
                      <input
                        type='email'
                        // name='email'
                        className='form-control'
                        aria-label='Email Address'
                        placeholder='Enter your Email'
                        aria-describedby='email-address'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        // defaultValue={user?.email}
                        // {...register('email', {
                        //   required: false,
                        //   pattern: {
                        //     value: /\S+@\S+\.\S+/,
                        //     message: 'Email format is not valid',
                        //   },
                        // })}
                      />
                    </div>
                  </div>
                  <div className='my-3'>
                    <div className='input-group'>
                      <span className='input-group-text' id='name'>
                        <i
                          className='far fa-address-card'
                          aria-hidden='true'
                        ></i>
                      </span>
                      <input
                        type='text'
                        // name='fulla'
                        className='form-control'
                        aria-label='Name'
                        placeholder='Enter your Name'
                        aria-describedby='Name'
                        value={fulName}
                        onChange={(e)=>setFullName(e.target.value)}
                        // defaultValue={user?.fullName}
                        // {...register('fullName', {
                        //   required: false,
                        // })}
                      />
                    </div>
                  </div>
                  <div className='my-3'>
                    <div className='input-group'>
                      <span className='input-group-text' id='username'>
                        <i
                          className='fas fa-user-circle'
                          aria-hidden='true'
                        ></i>
                      </span>
                      <input
                        type='text'
                        // name='username'
                        className='form-control'
                        aria-label='Name'
                        placeholder='Enter your Username'
                        aria-describedby='Username'
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        // {...register('username', {
                        //   required: false,
                        // })}
                      />
                    </div>
                  </div>
                  <div className='my-3'>
                    <div className='input-group'>
                      <span className='input-group-text' id='email-paypal'>
                        <i className='fab fa-paypal' aria-hidden='true'></i>
                      </span>
                      <input
                        type='email'
                        // name='email-paypal'
                        className='form-control'
                        aria-label='Email Paypal'
                        placeholder='Enter your PayPal Email'
                        aria-describedby='email-address'
                        value={paypalEmail}
                        onChange={(e)=>setPaypalEmail(e.target.value)}
                        // defaultValue={user?.paypalEmail}
                        // {...register('paypalEmail', {
                        //   required: false,
                        //   pattern: {
                        //     value: /\S+@\S+\.\S+/,
                        //     message: 'Email format is not valid',
                        //   },
                        // })}
                      />
                    </div>
                  </div>
                  <hr />
                  <div className='d-flex w-100 align-items-center justify-content-end'>
                    <button className='btn btn-sm btn-primary' type='submit'>
                      Update Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample2'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading2'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse2'
                aria-expanded='false'
                aria-controls='collapse2'
              >
                Developer Details
              </button>
            </h2>
            <div
              id='collapse2'
              className='accordion-collapse collapse'
              aria-labelledby='heading2'
              data-bs-parent='#accordionExample2'
            >
              <div className='accordion-body'>
                <form onSubmit={updateDevUser}>
                  <div className='my-3'>
                    <label htmlFor='dev-type' className='form-label'>
                      Developer Type:
                    </label>
                    <select
                      id='dev-type'
                      value={devType ? devType : ''}
                      className='form-select form-select-sm'
                      aria-label='.form-select-sm example'
                      onChange={(e) => setDevType(e.target.value)}
                    >
                      <option value='independant developer'>
                        Independant Developer
                      </option>
                      <option value='developement agency'>
                        Developement Agency
                      </option>
                    </select>
                  </div>
                  <div className='my-3'>
                    <label className='form-label'>Operation Systems:</label>
                    {devTypes.map((item, index) => (
                      <div className='form-check' key={index}>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value={item}
                          id={item}
                          defaultChecked={user?.operatingSystem?.includes(item)}
                          onChange={handleCheckDevTypes}
                        />
                        <label className='form-check-label' htmlFor={item}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className='my-3'>
                    <label className='form-label'>Frameworks:</label>
                    {frameworks.map((item, index) => (
                      <div className='form-check' key={index}>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value={item}
                          id={item + index}
                          defaultChecked={user?.frameworks?.includes(item)}
                          onChange={handleCheckFrameworks}
                        />
                        <label
                          className='form-check-label'
                          htmlFor={item + index}
                        >
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className='my-3'>
                    <label htmlFor='dev-exp' className='form-label'>
                      Developing experience:
                    </label>
                    <select
                      id='dev-exp'
                      className='form-select form-select-sm'
                      aria-label='.form-select-sm example'
                      value={devlopingExperience ? devlopingExperience : ''}
                      onChange={(e) => setDevlopingExperience(e.target.value)}
                    >
                      <option value='1 - 3 Years'>1 - 3 Years</option>
                      <option value='3 - 5 Years'>3 - 5 Years</option>
                      <option value='More than 5 years'>
                        More than 5 years
                      </option>
                    </select>
                  </div>

                  <div className='my-3'>
                    <label className='form-label'>
                      Public contact for profile: (optional for freelance work)
                    </label>
                    <div className='input-group'>
                      <span className='input-group-text' id='email-address'>
                        <i className='fas fa-envelope' aria-hidden='true'></i>
                      </span>
                      <input
                        type='email'
                        name='email'
                        className='form-control'
                        aria-label='Email Address'
                        placeholder='Enter your Email'
                        aria-describedby='email-address'
                        value={publicContact ? publicContact : ''}
                        onChange={(e) => setPublicContact(e.target.value)}
                      />
                    </div>
                  </div>

                  <hr />
                  <div className='d-flex w-100 align-items-center justify-content-end'>
                    <button className='btn btn-sm btn-primary' type='submit'>
                      Update Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample3'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading3'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse3'
                aria-expanded='false'
                aria-controls='collapse3'
              >
                Change Password
              </button>
            </h2>
            <div
              id='collapse3'
              className='accordion-collapse collapse'
              aria-labelledby='heading3'
              data-bs-parent='#accordionExample3'
            >
              <div className='accordion-body'>
                <form onSubmit={handleSubmit(updatePassword)}>
                  <div className='my-3'>
                    <div className='input-group'>
                      <span className='input-group-text' id='current-password'>
                        <i className='fas fa-key' aria-hidden='true'></i>
                      </span>
                      <input
                        type='password'
                        // name='currentPassword'
                        className='form-control'
                        aria-label='Current Password'
                        placeholder='Current Password'
                        aria-describedby='current-password'
                        // required
                        {...register('oldPassword', {
                          required: 'Current password is required',
                          minLength: {
                            value: 8,
                            message: 'Password not valid',
                          },
                        })}
                      />
                    </div>
                  </div>
                  <div className='my-3'>
                    <div className='input-group'>
                      <span className='input-group-text' id='new-password'>
                        <i className='fas fa-key' aria-hidden='true'></i>
                      </span>
                      <input
                        type='password'
                        // name='newPassword'
                        className='form-control'
                        aria-label='New Password'
                        placeholder='New Password'
                        aria-describedby='new-password'
                        // required
                        {...register('newPassword', {
                          required: 'new password is required',
                          minLength: {
                            value: 8,
                            message: 'Password not valid',
                          },
                        })}
                      />
                    </div>
                  </div>
                  <div className='my-3'>
                    <div className='input-group'>
                      <span className='input-group-text' id='confirm-password'>
                        <i className='fas fa-key' aria-hidden='true'></i>
                      </span>
                      <input
                        type='password'
                        // name='confirmPassword'
                        className='form-control'
                        aria-label='confirm Password'
                        placeholder='Confirm Password'
                        aria-describedby='confirm-password'
                        {...register('confirmPassword', {
                          required: 'confirm password is required',
                          minLength: {
                            value: 8,
                            message: 'Password not valid',
                          },
                        })}
                        // required
                      />
                    </div>
                  </div>

                  <hr />
                  <div className='d-flex w-100 align-items-center justify-content-end'>
                    <button className='btn btn-sm btn-primary' type='submit'>
                      Change Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample4'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading4'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse4'
                aria-expanded='false'
                aria-controls='collapse4'
              >
                Profile Picture
              </button>
            </h2>
            <div
              id='collapse4'
              className='accordion-collapse collapse'
              aria-labelledby='heading4'
              data-bs-parent='#accordionExample4'
            >
              <div className='accordion-body'>
                <form onSubmit={updateAvatar}>
                  <Avatar
                    alt='Remy Sharp'
                    {...stringAvatar('Anass Obito')}
                    sx={{ width: 100, height: 100 }}
                  />
                  <p>
                    Please upload size 300x300 or 512x512 (.png or .jpg file)
                  </p>
                  <input
                    type='file'
                    id='avatar'
                    onChange={(event) => setAvatar(event.target.files[0])}
                  />
                  <hr />
                  <div className='d-flex w-100 align-items-center justify-content-end'>
                    <button className='btn btn-sm btn-primary' type='submit'>
                      Change Profile Picture
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
