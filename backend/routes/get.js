import { Router } from 'express'
import Repo from '../models/sqlmodel.js'
import { getTrendingRepositories, getAllRepositories, getRepoByOwner, getRepoByName } from './getrep.js'
import { where } from 'sequelize'

const router = Router()


router.get('/gettrend', async (req, res) => {
  try {
    const data = await getTrendingRepositories()
    data.forEach(async repos => {
      const repo = await Repo.create({
        name: repos.name,
        starcount: repos.starcount,
        link: repos.url
      })
    })
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
  }
})


router.get('/getall', async (req, res) => {
  try {
    const data = await getAllRepositories()
    data.forEach(async repos => {
      const repo = await Repo.create({
        name: repos.name,
        starcount: repos.starcount,
        link: repos.url
      })
    })
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
  }
})


router.post('/getbyowner', async (req, res) => {
  try {
    const value = req.body.name
    const data = await getRepoByOwner(value)
    data.forEach(async repos => {
      const repo = await Repo.create({
        name: repos.name,
        starcount: repos.starcount,
        link: repos.url
      })
    })
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
  }
})


router.post('/getbyname', async (req, res) => {
  try {
    const value = req.body.name
    const data = await getRepoByName(value)
    data.forEach(async repos => {
      const repo = await Repo.create({
        name: repos.name,
        starcount: repos.starcount,
        link: repos.url
      })
    })
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
  }
})


router.get('/getalldb', async (req, res) => {
  res.status(200).json(await Repo.findAll())
})


router.get('/getbyid', async (req, res) => {
  res.status(200).json(await Repo.findByPk('73'))
})


export default router