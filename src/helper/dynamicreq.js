const DynamicApi = async (name, id, slug) => {
  if (name === 'generic' || name === 'campus-life') {
    return await GetCampusAPI(id)
  } else if (name === 'stream2') {
    return await GetStream2API(id)
  } else if (name === 'stream') {
    return await GetStreamAPI(id)
  } else if (name === 'course') {
    return await GetCourseAPI(slug)
  } else if (name === 'faculty-all') {
    return await GetFacultAllAPI(id)
  }
}

const GetStream2API = async (id) => {
  return fetch(`https://shooliniuniversity.com/media/Stream2API`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({ auth: 'shoolini@999', id }),
  }).then((res) => res.json())
}
const GetStreamAPI = async (id) => {
  return fetch(`https://shooliniuniversity.com/media/GetStreamAPI`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({ auth: 'shoolini@999', id }),
  }).then((res) => res.json())
}
const GetCampusAPI = async (id) => {
  return fetch(`https://shooliniuniversity.com/media/GetCampusAPI`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({ auth: 'shoolini@999', id }),
  }).then((res) => res.json())
}

const GetCourseAPI = async (slug) => {
  return fetch('https://shooliniuniversity.com/media/GetcourseAPI', {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      auth: 'shoolini@999',
      url: slug,
    }),
  }).then((res) => res.json())
}

const GetFacultAllAPI = async (id) => {
  return fetch(`https://shooliniuniversity.com/media/FacultyAllAPI`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({ auth: 'shoolini@999', id }),
  }).then((res) => res.json())
}

export { DynamicApi }
