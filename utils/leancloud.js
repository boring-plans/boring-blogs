import AV from 'leancloud-storage'

!AV.applicationId &&
  AV.init({
    appId: 'aleMaag0GPA84gHE7cLIMiEu-MdYXbMMI',
    appKey: 'jKltRbz0dlM46xcpBJPajso7',
  })

export const visit = (target) => {
  const { DeviceUUID } = require('device-uuid/lib/device-uuid')
  const uuid = new DeviceUUID().get()
  const query = new AV.Query('Visit')
  return query
    .equalTo('uuid', uuid)
    .equalTo('target', target)
    .first()
    .then((visit) => {
      if (!visit) {
        const Visit = AV.Object.extend('Visit')
        visit = new Visit()
        visit.set('uuid', uuid)
        visit.set('target', target)
        visit.save()
        return true
      } else {
        return false
      }
    })
}

export const star = (target) => {
  const { DeviceUUID } = require('device-uuid/lib/device-uuid')
  const uuid = new DeviceUUID().get()
  const query = new AV.Query('Star')
  return query
    .equalTo('uuid', uuid)
    .equalTo('target', target)
    .first()
    .then((star) => {
      if (!star) {
        const Star = AV.Object.extend('Star')
        star = new Star()
        star.set('uuid', uuid)
        star.set('target', target)
        star.save()
        return true
      } else {
        return false
      }
    })
}

export const getVisits = (target) => {
  return new AV.Query('Visit').equalTo('target', target).count()
}

export const getStars = (target) => {
  return new AV.Query('Star').equalTo('target', target).count()
}
