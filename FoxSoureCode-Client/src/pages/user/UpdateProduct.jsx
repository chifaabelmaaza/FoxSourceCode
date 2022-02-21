import React, { useState, useEffect } from 'react';

// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepButton from '@mui/material/StepButton';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { useRouteMatch } from 'react-router-dom';
import ItemsMenu from './ItemsMenu';
import { EditorState } from 'draft-js';
import TextEditor from '../../component/TextEditor';
// import { useDropzone } from 'react-dropzone';
import DropZonePreview from '../../component/DropZonePreview';
import productService from '../../services/Product.service';
import { useParams } from 'react-router-dom';
// const steps = ['add-product', 'Images & Assets', 'Files & Pricing'];
// import createDOMPurify from 'dompurify';
// import { JSDOM } from 'jsdom';

function UpdateProduct({ categories }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

    const [descriptionPreview, setDescriptionPreview] = useState('');
    const [featuresPreview, setFeaturesPreview] = useState('');

  useEffect(() => {
    productService
      .getProductById(id)
      .then((res) => {
          console.log(res);
        loadSubcategories(res.data?.product?.category?.id);
        // console.log(res.data?.product);
        setName(res.data?.product.name);
        setShortDescription(res.data?.product?.shortDescription);
        setSelectedCat(res.data?.product?.category?.id);
        setSelectedSubCat(res.data?.product?.subcategory?.id);
        setCheckedOps(
          res.data?.product?.operatingSystems
            ? res.data?.product?.operatingSystems.split(';')
            : []
        );
        setCheckedFiles(
          res.data?.product?.filesIncluded
            ? res.data?.product?.filesIncluded.split(';')
            : []
        );
        setCheckedSuppCms(
          res.data?.product?.supportedCms
            ? res.data?.product?.supportedCms.split(';')
            : []
        );
        setCheckedHtmlFram(
          res.data?.product?.htmlFrameworks
            ? res.data?.product?.htmlFrameworks.split(';')
            : []
        );
        setCheckedJsFram(
          res.data?.product?.jsFrameworks
            ? res.data?.product?.jsFrameworks.split(';')
            : []
        );
        setCheckedSoftV(
          res.data?.product?.softwareVersions
            ? res.data?.product?.softwareVersions.split(';')
            : []
        );
        setCheckedSoftF(
          res.data?.product?.softwareFrameworks
            ? res.data?.product?.softwareFrameworks.split(';')
            : []
        );
        setCheckedSoftF(
          res.data?.product?.softwareFrameworks
            ? res.data?.product?.softwareFrameworks.split(';')
            : []
        );
        setCheckedDb(
          res.data?.product?.database
            ? res.data?.product?.database.split(';')
            : []
        );
        setLiveDemo(res.data?.product?.liveDemo);
        setPriceSingle(res.data?.product?.priceSingle);
        setPriceMultiple(res.data?.product?.priceMultiple);
        setDescriptionPreview(res.data?.product?.description);
        setFeaturesPreview(res.data?.product?.features);
        setProduct(res.data?.product);
        // setEditorStateDescription(res.data?.product?.description);

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  //   console.log(product);
  let { url } = useRouteMatch();
  const [active, setActive] = React.useState('add-product');

  const handleComplete3 = () => {
    step3();
  };

  const [selectedCat, setSelectedCat] = useState('');
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubCat, setSelectedSubCat] = useState('');

  const loadSubcategories = (category) => {
    productService
      .getSubcategoriesByCategory(category)
      .then((res) => {
        setSubcategories(res.subcategories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [checkedOps, setCheckedOps] = useState([]);

  const handleCheckOps = (event) => {
    var updatedList = [...checkedOps];
    if (event.target.checked) {
      updatedList = [...checkedOps, event.target.value];
    } else {
      updatedList.splice(checkedOps.indexOf(event.target.value), 1);
    }
    // updateDataHandler('operatingSystems', updatedList.join(';'));
    setCheckedOps(updatedList);
  };

  const [ops, setOps] = useState([
    'iOS 8.0.x',
    'iOS 9.2.x',
    'iOS 8.1.x',
    'iOS 9.0.x',
    'iOS 9.0.x',
    'iOS 9.3',
    'iOS 10',
    'iOS 11',
    'iOS 12',
    'iOS 13',
    'Android 4.1.x',
    'Android 4.2.x',
    'Android 4.3.x',
    'Android 4.4',
    'Android 5.0',
    'Android 6.0',
    'Android 7.0',
    'Android 8.0',
    'Android 9.0',
    'Android 10.0',
    'Unity 4.6.x',
    'Unity 5.0',
    'Unity 5.1',
    'Unity 5.2.x',
    'Unity 5.3',
    'Unity 5.4',
    'Unity 5.5',
    'Unity 5.6',
    'Unity 2017',
    'Unity 2018',
    'Unity 2019',
    'Unity 2020',
  ]);

  const [checkedFiles, setCheckedFiles] = useState([]);

  const handleCheckFiles = (event) => {
    var updatedList = [...checkedFiles];
    if (event.target.checked) {
      updatedList = [...checkedFiles, event.target.value];
    } else {
      updatedList.splice(checkedFiles.indexOf(event.target.value), 1);
    }
    setCheckedFiles(updatedList);
  };
  const [files, setFiles] = useState([
    'php',
    'js',
    'ascx',
    'h',
    'nib',
    'dex',
    'unityproj',
    'lua',
    'ai',
    'c',
    'rb',
    'html',
    'sql',
    'vb',
    'm',
    'swift',
    'db',
    'obj',
    'css',
    'swf',
    'flv',
    'cs',
    'pch',
    'dat',
    'java',
    'prefab',
    'less',
    'aspx',
    'csproj',
    'xib',
    'apk',
    'dll',
    'fbx',
    'xml',
    'epx',
    'asm',
    'build.setting',
    'cpp',
    'muse',
    'Layered.psd',
    'py',
  ]);

  const [checkedHtmlFram, setCheckedHtmlFram] = useState([]);

  const handleCheckHtmlFram = (event) => {
    var updatedList = [...checkedHtmlFram];
    if (event.target.checked) {
      updatedList = [...checkedHtmlFram, event.target.value];
    } else {
      updatedList.splice(checkedHtmlFram.indexOf(event.target.value), 1);
    }
    setCheckedHtmlFram(updatedList);
  };
  const [htmlFram, setHtmlFram] = useState([
    'Bootstrap',
    'Bootstrap',
    'Foundation',
    'Less',
    'Semantic UI',
    'Skeleton',
    'YAML',
  ]);

  const [checkedJsFram, setCheckedJsFram] = useState([]);

  const handleCheckJsFram = (event) => {
    var updatedList = [...checkedJsFram];
    if (event.target.checked) {
      updatedList = [...checkedJsFram, event.target.value];
    } else {
      updatedList.splice(checkedJsFram.indexOf(event.target.value), 1);
    }
    setCheckedJsFram(updatedList);
  };
  const [jsFram, setJsFram] = useState([
    'jQuery',
    'MooTools',
    'YUI',
    'EXT JS',
    'Backbone.js',
    'Node.js',
  ]);

  const [checkedSoftV, setCheckedSoftV] = useState([]);

  const handleCheckSoftV = (event) => {
    var updatedList = [...checkedSoftV];
    if (event.target.checked) {
      updatedList = [...checkedSoftV, event.target.value];
    } else {
      updatedList.splice(checkedSoftV.indexOf(event.target.value), 1);
    }
    setCheckedSoftV(updatedList);
  };
  const [softV, setSoftV] = useState([
    'PHP 4.x',
    'PHP 5.2',
    'PHP 5.6',
    'PHP 7.3',
    '.NET 3.5',
    'PHP 5.x',
    'PHP 5.3',
    'PHP 7.0',
    'PHP 7.4',
    '.NET 4.0',
    'PHP 5.4',
    'PHP 7.1',
    '.NET 2.0',
    '.NET 4.5',
    'PHP 5.1',
    'PHP 5.5',
    'PHP 7.2',
    '.NET 3.0',
    '.NET 4.6',
  ]);

  const [checkedSoftF, setCheckedSoftF] = useState([]);

  const handleCheckSoftF = (event) => {
    var updatedList = [...checkedSoftF];
    if (event.target.checked) {
      updatedList = [...checkedSoftF, event.target.value];
    } else {
      updatedList.splice(checkedSoftF.indexOf(event.target.value), 1);
    }
    setCheckedSoftF(updatedList);
  };
  const [softF, setSoftF] = useState([
    'Laravel',
    'Symphony',
    'Solar',
    'Solar',
    'CodeIgniter',
    'Kohana',
    'React',
    'Flex',
    'CakePHP',
    'Yii',
    'Angular',
    'Zend',
    'Lithium',
    'VueJS',
  ]);

  const [checkedDb, setCheckedDb] = useState([]);

  const handleCheckDb = (event) => {
    var updatedList = [...checkedDb];
    if (event.target.checked) {
      updatedList = [...checkedDb, event.target.value];
    } else {
      updatedList.splice(checkedDb.indexOf(event.target.value), 1);
    }
    setCheckedDb(updatedList);
  };

  const [dbs, setDbs] = useState(['MySQL 4.x', 'MySQL 4.x']);

  const [checkedSuppCms, setCheckedSuppCms] = useState([]);
  const handleCheckSuppCms = (event) => {
    var updatedList = [...checkedSuppCms];
    if (event.target.checked) {
      updatedList = [...checkedSuppCms, event.target.value];
    } else {
      updatedList.splice(checkedSuppCms.indexOf(event.target.value), 1);
    }
    setCheckedSuppCms(updatedList);
  };
  const [suppCms, setSupCms] = useState([
    'Joomla 4.0.x',
    'Joomla 3.9.x',
    'Joomla 3.8.x',
    'Joomla 3.7.x',
    'Joomla 3.6.x',
    'Joomla 3.5.x',
    'Joomla 3.4.x',
    'Joomla 3.3.x',
    'Joomla 3.1.x',
    'Joomla 3.0.x',
    'Joomla 2.5.x',
    'WordPress 5.0',
    'WordPress 4.9',
    'WordPress 4.8',
    'WordPress 4.7',
    'WordPress 4.6',
    'WordPress 4.5',
    'WordPress 4.4',
    'WordPress 4.3',
    'WordPress 4.2',
    'WordPress 4.1',
    'WordPress 4.0',
    'WordPress 3.9',
    'WordPress 3.8',
    'Magento 2.0.x',
    'Magento 1.9.2.x',
    'Magento 2.0.x',
    'Magento 1.9.0.x',
    'Magento 1.8',
    'Magento 1.7',
    'Drupal 8.0',
    'Drupal 7.0',
    'OpenCart 2.3',
    'OpenCart 2.2',
    'OpenCart 2.0',
    'osCommerce 3.0.x',
    'OpenCart 1.5',
    'osCommerce 2.3.x',
    'PrestaShop 1.5',
    'PrestaShop 1.6',
    'PrestaShop 1.7',
    'nopCommerce 3.5',
    'nopCommerce 3.6',
    'nopCommerce 3.7',
    'Ghost 0.11',
    'Ghost 0.10',
    'Ghost 0.9',
    'Ghost 0.8',
    'Ghost 0.7',
    'WooCommerce 3.0',
    'WooCommerce 2.9',
    'WooCommerce 2.8',
    'WooCommerce 2.7',
    'WooCommerce 2.6',
    'WooCommerce 2.5',
    'Ghost 0.11',
    'Ghost 1.0',
    'Ghost 0.9',
    'MyBB 1.8.x',
    'MyBB 1.7.x',
  ]);

  // Editor
  const [editorStateDescription, setEditorStateDescription] = React.useState(
    () => EditorState.createEmpty()
  );
  // Editor
  const [editorStateFeatures, setEditorStateFeatures] = React.useState(() =>
    EditorState.createEmpty()
  );

  //   Drop zine icon
  const [icons, setIcons] = useState([]);
  const [preview, setPreview] = useState([]);

  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [screen1, setScreen1] = useState([]);
  const [screen2, setScreen2] = useState([]);
  const [screen3, setScreen3] = useState([]);
  const [screen4, setScreen4] = useState([]);
  const [screen5, setScreen5] = useState([]);
  const [screen6, setScreen6] = useState([]);
  const [screen7, setScreen7] = useState([]);
  const [screen8, setScreen8] = useState([]);
  const [mainZip, setMainZip] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const [data, setData] = useState({});

  const [name, setName] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [liveDemo, setLiveDemo] = useState('');
  const [PriceSingle, setPriceSingle] = useState(0);
  const [priceMultiple, setPriceMultiple] = useState(0);

  const step3 = () => {
    data.name = name;
    data.shortDescription = shortDescription;
    data.description = description;
    data.features = features;
    data.category = selectedCat;
    data.subcategory = selectedSubCat;
    data.operatingSystems = checkedOps.join(';');
    data.filesIncluded = checkedFiles.join(';');
    data.supportedCms = checkedSuppCms.join(';');
    data.htmlFrameworks = checkedHtmlFram.join(';');
    data.jsFrameworks = checkedJsFram.join(';');
    data.softwareVersions = checkedSoftV.join(';');
    data.softwareFrameworks = checkedSoftF.join(';');
    data.database = checkedDb.join(';');
    data.liveDemo = liveDemo;
    data.icon = icons;
    data.preview = preview;
    data.screenshot1 = screen1;
    data.screenshot2 = screen2;
    data.screenshot3 = screen3;
    data.screenshot4 = screen4;
    data.screenshot5 = screen5;
    data.screenshot6 = screen6;
    data.screenshot7 = screen7;
    data.screenshot8 = screen8;
    data.mainZip = mainZip;
    data.priceSingle = PriceSingle;
    data.priceMultiple = priceMultiple;

    console.log(data);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('shortDescription', data.shortDescription);
    formData.append('description', data.description);
    formData.append('features', data.features);
    formData.append('category', data.category);
    formData.append('subcategory', data.subcategory);
    formData.append('operatingSystems', data.operatingSystems);
    formData.append('filesIncluded', data.filesIncluded);
    formData.append('supportedCms', data.supportedCms);
    formData.append('htmlFrameworks', data.htmlFrameworks);
    formData.append('jsFrameworks', data.jsFrameworks);
    formData.append('softwareVersions', data.softwareVersions);
    formData.append('softwareFrameworks', data.softwareFrameworks);
    formData.append('database', data.database);
    formData.append('liveDemo', data.liveDemo);
    formData.append('icon', data?.icon[0] ? data?.icon[0] : null);
    formData.append('preview', data?.preview[0] ? data?.preview[0] : null);
    formData.append(
      'screenshot1',
      data?.screenshot1[0] ? data?.screenshot1[0] : null
    );
    formData.append(
      'screenshot2',
      data?.screenshot2[0] ? data?.screenshot2[0] : null
    );
    formData.append(
      'screenshot3',
      data?.screenshot3[0] ? data?.screenshot3[0] : null
    );
    formData.append(
      'screenshot4',
      data?.screenshot4[0] ? data?.screenshot4[0] : null
    );
    formData.append(
      'screenshot5',
      data?.screenshot5[0] ? data?.screenshot5[0] : null
    );
    formData.append(
      'screenshot6',
      data?.screenshot6[0] ? data?.screenshot6[0] : null
    );
    formData.append(
      'screenshot7',
      data?.screenshot7[0] ? data?.screenshot7[0] : null
    );
    formData.append(
      'screenshot8',
      data?.screenshot8[0] ? data?.screenshot8[0] : null
    );
    formData.append('mainZip', data?.mainZip[0]);
    formData.append('priceSingle', data.priceSingle);
    formData.append('priceMultiple', data.priceMultiple);

    productService
      .updateProduct(formData, product.id)
      .then((res) => {
        // console.log(res);
        // window.location.reload();
      })
      .catch((err) => console.log(err.response.data));
  };

  if (!loading)
    return (
      <div className='addProduct'>
        <ItemsMenu url={url} active={active} setActive={setActive} />

        <div className='my-1 p-3 bg-white rounded box-shadow'>
          <div>
            <div className='my-3'>
              <label className='form-label'>
                Name: <span style={{ color: 'red' }}>*</span>
              </label>
              <div className='input-group'>
                <input
                  type='text'
                  name='name'
                  className='form-control'
                  aria-label='Name'
                  aria-describedby='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  // required
                />
              </div>
            </div>
            <div className='my-3'>
              <label className='form-label'>
                Short Description: (Max. 80 characters):
                <span style={{ color: 'red' }}>*</span>
              </label>
              <div className='input-group'>
                <input
                  type='text'
                  name='short description'
                  className='form-control'
                  aria-label='short description'
                  aria-describedby='short description'
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  // required
                />
              </div>
            </div>
            <hr />

            <div className='my-3'>
              <label className='form-label'>
                Category: <span style={{ color: 'red' }}>*</span>
              </label>
              <select
                id='dev-type'
                className='form-select form-select-sm'
                aria-label='.form-select-sm example'
                value={selectedCat}
                onChange={(e) => {
                  loadSubcategories(e.target.value);
                  setSelectedCat(e.target.value);
                  // updateDataHandler('category', e.target.value);
                }}
              >
                <option value=''></option>
                {categories.map((item, key) => (
                  <option
                    key={key}
                    value={item.id}
                    // selected={product?.category.id === item.id ? true : false}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='my-3'>
              <label className='form-label'>
                Subcategory: <span style={{ color: 'red' }}>*</span>
              </label>
              <select
                id='dev-type'
                className='form-select form-select-sm'
                aria-label='.form-select-sm example'
                value={selectedSubCat}
                onChange={(e) => {
                  setSelectedSubCat(e.target.value);
                  // updateDataHandler('subcategory', e.target.value);
                }}
              >
                {/* {categories.map((item) =>
                          item.category === selectedCat
                            ? item.subcategories.map((sub, index) => (
                                <option key={index} value={sub}>
                                  {sub}
                                </option>
                              ))
                            : null
                        )} */}
                <option value=''></option>
                {subcategories.length &&
                  subcategories.map((sub, index) => (
                    <option key={index} value={sub.id}>
                      {sub.name}
                    </option>
                  ))}
              </select>
            </div>
            {selectedCat === 'game templates' ||
            selectedCat === '12325117-f27d-4cbc-8b9a-740b21de60ab' ||
            selectedCat === 'app templates' ? (
              <div className='my-3'>
                <label className='form-label'>
                  Operating systems:
                  <span style={{ color: 'red' }}>*</span>
                </label>
                <div className='row'>
                  {ops.map((ext, index) => (
                    <div key={index} className='col-sm-12 col-md-3'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value={'.' + ext}
                          id={`os${index}`}
                          defaultChecked={
                            checkedOps.includes('.' + ext) ? true : false
                          }
                          onChange={handleCheckOps}
                        />
                        <label
                          className='form-check-label'
                          htmlFor={`os${index}`}
                        >
                          .{ext}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            <div className='my-3'>
              <label className='form-label'>
                Files included:
                <span style={{ color: 'red' }}>*</span>
              </label>
              <div className='row'>
                {files.map((ext, index) => (
                  <div key={index} className='col-sm-12 col-md-3'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value={'.' + ext}
                        id={`ext${index}`}
                        defaultChecked={
                          checkedFiles.includes('.' + ext) ? true : false
                        }
                        onChange={handleCheckFiles}
                      />

                      <label
                        className='form-check-label'
                        htmlFor={`ext${index}`}
                      >
                        .{ext}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {selectedCat === 'Themes' ||
            selectedCat === 'Scripts & code' ||
            selectedCat === '3edd4d14-4502-424d-863f-ec708e5a4cef' ||
            selectedCat === 'd6d6ced0-b328-470b-be10-8367467015ea' ? (
              <div className='my-3'>
                <label className='form-label'>
                  HTML/CSS Framework:
                  <span style={{ color: 'red' }}>*</span>
                </label>
                <div className='row'>
                  {htmlFram.map((fram, index) => (
                    <div key={index} className='col-sm-12 col-md-3'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value={fram}
                          id={`fram${index}`}
                          defaultChecked={
                            checkedHtmlFram.includes(fram) ? true : false
                          }
                          onChange={handleCheckHtmlFram}
                        />
                        <label
                          className='form-check-label'
                          htmlFor={`fram${index}`}
                        >
                          {fram}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            {selectedCat === 'Themes' ||
            selectedCat === 'Scripts & code' ||
            selectedCat === '3edd4d14-4502-424d-863f-ec708e5a4cef' ||
            selectedCat === 'd6d6ced0-b328-470b-be10-8367467015ea' ? (
              <div className='my-3'>
                <label className='form-label'>
                  JavaScript Frameworks:
                  <span style={{ color: 'red' }}>*</span>
                </label>
                <div className='row'>
                  {jsFram.map((fram, index) => (
                    <div key={index} className='col-sm-12 col-md-3'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value={fram}
                          id={`jsfram${index}`}
                          defaultChecked={
                            checkedJsFram.includes(fram) ? true : false
                          }
                          onChange={handleCheckJsFram}
                        />
                        <label
                          className='form-check-label'
                          htmlFor={`jsfram${index}`}
                        >
                          {fram}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            {selectedCat === 'Scripts & code' ||
            selectedCat === '3edd4d14-4502-424d-863f-ec708e5a4cef' ? (
              <div className='my-3'>
                <label className='form-label'>
                  Software version:
                  <span style={{ color: 'red' }}>*</span>
                </label>
                <div className='row'>
                  {softV.map((fram, index) => (
                    <div key={index} className='col-sm-12 col-md-3'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value={fram}
                          id={`softv${index}`}
                          defaultChecked={
                            checkedSoftV.includes(fram) ? true : false
                          }
                          onChange={handleCheckSoftV}
                        />
                        <label
                          className='form-check-label'
                          htmlFor={`softv${index}`}
                        >
                          {fram}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            {selectedCat === 'Scripts & code' ||
            selectedCat === '3edd4d14-4502-424d-863f-ec708e5a4cef' ? (
              <div className='my-3'>
                <label className='form-label'>
                  Software framework:
                  <span style={{ color: 'red' }}>*</span>
                </label>
                <div className='row'>
                  {softF.map((fram, index) => (
                    <div key={index} className='col-sm-12 col-md-3'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value={fram}
                          id={`softf${index}`}
                          defaultChecked={
                            checkedSoftF.includes(fram) ? true : false
                          }
                          onChange={handleCheckSoftF}
                        />
                        <label
                          className='form-check-label'
                          htmlFor={`softf${index}`}
                        >
                          {fram}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            {selectedCat === 'Scripts & code' ||
            selectedCat === '3edd4d14-4502-424d-863f-ec708e5a4cef' ? (
              <div className='my-3'>
                <label className='form-label'>
                  Database:
                  <span style={{ color: 'red' }}>*</span>
                </label>
                <div className='row'>
                  {dbs.map((fram, index) => (
                    <div key={index} className='col-sm-12 col-md-3'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value={fram}
                          id={`db${index}`}
                          defaultChecked={
                            checkedDb.includes(fram) ? true : false
                          }
                          onChange={handleCheckDb}
                        />
                        <label
                          className='form-check-label'
                          htmlFor={`db${index}`}
                        >
                          {fram}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            {selectedCat === 'Themes' ||
            selectedCat === 'plugins' ||
            selectedCat === 'd6d6ced0-b328-470b-be10-8367467015ea' ||
            selectedCat === 'd6378f4c-b719-4705-993b-26d32db1315b' ? (
              <div className='my-3'>
                <label className='form-label'>
                  Supported CMS:
                  <span style={{ color: 'red' }}>*</span>
                </label>
                <div className='row'>
                  {suppCms.map((fram, index) => (
                    <div key={index} className='col-sm-12 col-md-3'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value={fram}
                          id={`cms${index}`}
                          defaultChecked={
                            checkedSuppCms.includes(fram) ? true : false
                          }
                          onChange={handleCheckSuppCms}
                        />
                        <label
                          className='form-check-label'
                          htmlFor={`cms${index}`}
                        >
                          {fram}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className='my-3'>
              <label>
                Description:
                <span style={{ color: 'red' }}>*</span>
                (Copy your text in the text editor to edit)
              </label>
              <div className='my-3'>

                <div dangerouslySetInnerHTML={{ __html: descriptionPreview }} />
              </div>
              <TextEditor
                editorState={editorStateDescription}
                setEditorState={setEditorStateDescription}
                setContent={setDescription}
              />
            </div>
            <div className='my-3'>
              <label>
                Features:
                <span style={{ color: 'red' }}>*</span>
                (Copy your text in the text editor to edit)
              </label>
              <div className='my-3'>
                <div dangerouslySetInnerHTML={{ __html: featuresPreview }} />
              </div>
              <TextEditor
                editorState={editorStateFeatures}
                setEditorState={setEditorStateFeatures}
                setContent={setFeatures}
              />
            </div>
            <hr />
            <div className='mb-3'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Live Demo URL: (eg. your URL or Google Drive)
                <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type='url'
                className='form-control'
                id='exampleFormControlInput1'
                value={liveDemo}
                onChange={(e) => setLiveDemo(e.target.value)}
              />
            </div>
            <hr />
          </div>
          <div className='my-3'>
            <div className='row'>
              <div className='col-md-6 col-sm-12'>
                <div className='mb-3'>
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    Icon Image:
                    <span style={{ color: 'red' }}>*</span> (size: 200x200)
                  </label>
                  <div className='dm-uploader'>
                    <DropZonePreview maxFiles={1} setImages={setIcons}>
                      Drag 'n' drop some files here, or click to select files
                    </DropZonePreview>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-sm-12'>
                <div className='mb-3'>
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    Preview Image:
                    <span style={{ color: 'red' }}>*</span> (size: 590x300)
                  </label>

                  <div className='dm-uploader'>
                    <DropZonePreview maxFiles={1} setImages={setPreview}>
                      Drag 'n' drop some files here, or click to select files
                    </DropZonePreview>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-3 col-sm-12'>
                <div className='mb-3'>
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    Screenshot #1:
                    <span style={{ color: 'red' }}>*</span>
                  </label>
                  <div className='dm-uploader'>
                    <DropZonePreview maxFiles={1} setImages={setScreen1}>
                      Drag 'n' drop some files here, or click to select files
                    </DropZonePreview>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-sm-12'>
                <div className='mb-3'>
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    Screenshot #2:
                    <span style={{ color: 'red' }}>*</span>
                  </label>
                  <div className='dm-uploader'>
                    <DropZonePreview maxFiles={1} setImages={setScreen2}>
                      Drag 'n' drop some files here, or click to select files
                    </DropZonePreview>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-sm-12'>
                <div className='mb-3'>
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    Screenshot #3:
                    <span style={{ color: 'red' }}>*</span>
                  </label>
                  <div className='dm-uploader'>
                    <DropZonePreview maxFiles={1} setImages={setScreen3}>
                      Drag 'n' drop some files here, or click to select files
                    </DropZonePreview>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-sm-12'>
                <div className='mb-3'>
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    Screenshot #4:
                    <span style={{ color: 'red' }}>*</span>
                  </label>
                  <div className='dm-uploader'>
                    <DropZonePreview maxFiles={1} setImages={setScreen4}>
                      Drag 'n' drop some files here, or click to select files
                    </DropZonePreview>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <button
                  className={`btn-link btn text-primary btn-sm float-end text-decoration-none ${
                    showMore ? 'd-none' : ''
                  }`}
                  onClick={() => setShowMore(true)}
                >
                  Add More Screenshots
                </button>
              </div>
            </div>
            <div className={`row ${!showMore ? 'd-none' : ''}`}>
              <div className='col-md-3 col-sm-12'>
                <div className='mb-3'>
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    Screenshot #5:
                    <span style={{ color: 'red' }}>*</span>
                  </label>
                  <div className='dm-uploader'>
                    <DropZonePreview maxFiles={1} setImages={setScreen5}>
                      Drag 'n' drop some files here, or click to select files
                    </DropZonePreview>
                  </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-12'>
                <div className='mb-3'>
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    Screenshot #6:
                    <span style={{ color: 'red' }}>*</span>
                  </label>
                  <div className='dm-uploader'>
                    <DropZonePreview maxFiles={1} setImages={setScreen6}>
                      Drag 'n' drop some files here, or click to select files
                    </DropZonePreview>
                  </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-12'>
                <div className='mb-3'>
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    Screenshot #7:
                    <span style={{ color: 'red' }}>*</span>
                  </label>
                  <div className='dm-uploader'>
                    <DropZonePreview maxFiles={1} setImages={setScreen7}>
                      Drag 'n' drop some files here, or click to select files
                    </DropZonePreview>
                  </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-12'>
                <div className='mb-3'>
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    Screenshot #8:
                    <span style={{ color: 'red' }}>*</span>
                  </label>
                  <div className='dm-uploader'>
                    <DropZonePreview maxFiles={1} setImages={setScreen8}>
                      Drag 'n' drop some files here, or click to select files
                    </DropZonePreview>
                  </div>
                </div>
              </div>
            </div>
            {/* <button
                      className='btn btn-primary w-100'
                      type='submit'
                      onClick={handleComplete2}
                    >
                      Next Step
                    </button> */}
          </div>
          {/* ) : ( */}
          <div>
            <div className='row'>
              <div className='col-12'>
                <div className='mb-3'>
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    Main File (.ZIP only):
                    <span style={{ color: 'red' }}>*</span>
                  </label>
                  <div className='dm-uploader'>
                    <DropZonePreview
                      maxFiles={1}
                      setImages={setMainZip}
                      accpet='.zip'
                    >
                      Drag 'n' drop some files here, or click to select files
                    </DropZonePreview>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className='my-3'>
              <label className='form-label'>
                Price: (Single Licence):
                <span style={{ color: 'red' }}>*</span>
              </label>
              <div className='input-group'>
                <span className='input-group-text'>$</span>
                <input
                  type='number'
                  min={0}
                  className='form-control'
                  aria-label='Amount (to the nearest dollar)'
                  value={PriceSingle}
                  onChange={(e) => setPriceSingle(e.target.value)}
                />
                <span className='input-group-text'>.00</span>
              </div>
            </div>
            <div className='my-3'>
              <label className='form-label'>
                Price: (Multiple Licence):
                <span style={{ color: 'red' }}>*</span>
              </label>
              <div className='input-group'>
                <span className='input-group-text'>$</span>
                <input
                  type='number'
                  min={0}
                  className='form-control'
                  aria-label='Amount (to the nearest dollar)'
                  value={priceMultiple}
                  onChange={(e) => setPriceMultiple(e.target.value)}
                />
                <span className='input-group-text'>.00</span>
              </div>
            </div>
            <button
              className='btn btn-primary w-100'
              type='submit'
              onClick={handleComplete3}
            >
              Update & Save
            </button>
            <hr />
          </div>

        </div>
      </div>
    );
  else return <div className='text'>Loading Product ...</div>;
}

export default UpdateProduct;
