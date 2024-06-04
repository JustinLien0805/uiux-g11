/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as HiFiHiFiImport } from './routes/hi-fi/_hi-fi'
import { Route as LayoutHw4Import } from './routes/_layout/hw4'
import { Route as LayoutHw3Import } from './routes/_layout/hw3'
import { Route as LayoutHw2Import } from './routes/_layout/hw2'
import { Route as LayoutHw1Import } from './routes/_layout/hw1'
import { Route as LayoutFinalImport } from './routes/_layout/final'
import { Route as HiFiHiFiVerifyImport } from './routes/hi-fi/_hi-fi/verify'
import { Route as HiFiHiFiStep5Import } from './routes/hi-fi/_hi-fi/step-5'
import { Route as HiFiHiFiStep4Import } from './routes/hi-fi/_hi-fi/step-4'
import { Route as HiFiHiFiStep3Import } from './routes/hi-fi/_hi-fi/step-3'
import { Route as HiFiHiFiStep2Import } from './routes/hi-fi/_hi-fi/step-2'
import { Route as HiFiHiFiStep11Import } from './routes/hi-fi/_hi-fi/step-1-1'
import { Route as HiFiHiFiStep1Import } from './routes/hi-fi/_hi-fi/step-1'
import { Route as HiFiHiFiSignUpImport } from './routes/hi-fi/_hi-fi/sign-up'
import { Route as HiFiHiFiLoginImport } from './routes/hi-fi/_hi-fi/login'

// Create Virtual Routes

const HiFiImport = createFileRoute('/hi-fi')()

// Create/Update Routes

const HiFiRoute = HiFiImport.update({
  path: '/hi-fi',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const HiFiHiFiRoute = HiFiHiFiImport.update({
  id: '/_hi-fi',
  getParentRoute: () => HiFiRoute,
} as any)

const LayoutHw4Route = LayoutHw4Import.update({
  path: '/hw4',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutHw3Route = LayoutHw3Import.update({
  path: '/hw3',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutHw2Route = LayoutHw2Import.update({
  path: '/hw2',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutHw1Route = LayoutHw1Import.update({
  path: '/hw1',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutFinalRoute = LayoutFinalImport.update({
  path: '/final',
  getParentRoute: () => LayoutRoute,
} as any)

const HiFiHiFiVerifyRoute = HiFiHiFiVerifyImport.update({
  path: '/verify',
  getParentRoute: () => HiFiHiFiRoute,
} as any)

const HiFiHiFiStep5Route = HiFiHiFiStep5Import.update({
  path: '/step-5',
  getParentRoute: () => HiFiHiFiRoute,
} as any)

const HiFiHiFiStep4Route = HiFiHiFiStep4Import.update({
  path: '/step-4',
  getParentRoute: () => HiFiHiFiRoute,
} as any)

const HiFiHiFiStep3Route = HiFiHiFiStep3Import.update({
  path: '/step-3',
  getParentRoute: () => HiFiHiFiRoute,
} as any)

const HiFiHiFiStep2Route = HiFiHiFiStep2Import.update({
  path: '/step-2',
  getParentRoute: () => HiFiHiFiRoute,
} as any)

const HiFiHiFiStep11Route = HiFiHiFiStep11Import.update({
  path: '/step-1-1',
  getParentRoute: () => HiFiHiFiRoute,
} as any)

const HiFiHiFiStep1Route = HiFiHiFiStep1Import.update({
  path: '/step-1',
  getParentRoute: () => HiFiHiFiRoute,
} as any)

const HiFiHiFiSignUpRoute = HiFiHiFiSignUpImport.update({
  path: '/sign-up',
  getParentRoute: () => HiFiHiFiRoute,
} as any)

const HiFiHiFiLoginRoute = HiFiHiFiLoginImport.update({
  path: '/login',
  getParentRoute: () => HiFiHiFiRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/final': {
      preLoaderRoute: typeof LayoutFinalImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/hw1': {
      preLoaderRoute: typeof LayoutHw1Import
      parentRoute: typeof LayoutImport
    }
    '/_layout/hw2': {
      preLoaderRoute: typeof LayoutHw2Import
      parentRoute: typeof LayoutImport
    }
    '/_layout/hw3': {
      preLoaderRoute: typeof LayoutHw3Import
      parentRoute: typeof LayoutImport
    }
    '/_layout/hw4': {
      preLoaderRoute: typeof LayoutHw4Import
      parentRoute: typeof LayoutImport
    }
    '/hi-fi': {
      preLoaderRoute: typeof HiFiImport
      parentRoute: typeof rootRoute
    }
    '/hi-fi/_hi-fi': {
      preLoaderRoute: typeof HiFiHiFiImport
      parentRoute: typeof HiFiRoute
    }
    '/_layout/': {
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    '/hi-fi/_hi-fi/login': {
      preLoaderRoute: typeof HiFiHiFiLoginImport
      parentRoute: typeof HiFiHiFiImport
    }
    '/hi-fi/_hi-fi/sign-up': {
      preLoaderRoute: typeof HiFiHiFiSignUpImport
      parentRoute: typeof HiFiHiFiImport
    }
    '/hi-fi/_hi-fi/step-1': {
      preLoaderRoute: typeof HiFiHiFiStep1Import
      parentRoute: typeof HiFiHiFiImport
    }
    '/hi-fi/_hi-fi/step-1-1': {
      preLoaderRoute: typeof HiFiHiFiStep11Import
      parentRoute: typeof HiFiHiFiImport
    }
    '/hi-fi/_hi-fi/step-2': {
      preLoaderRoute: typeof HiFiHiFiStep2Import
      parentRoute: typeof HiFiHiFiImport
    }
    '/hi-fi/_hi-fi/step-3': {
      preLoaderRoute: typeof HiFiHiFiStep3Import
      parentRoute: typeof HiFiHiFiImport
    }
    '/hi-fi/_hi-fi/step-4': {
      preLoaderRoute: typeof HiFiHiFiStep4Import
      parentRoute: typeof HiFiHiFiImport
    }
    '/hi-fi/_hi-fi/step-5': {
      preLoaderRoute: typeof HiFiHiFiStep5Import
      parentRoute: typeof HiFiHiFiImport
    }
    '/hi-fi/_hi-fi/verify': {
      preLoaderRoute: typeof HiFiHiFiVerifyImport
      parentRoute: typeof HiFiHiFiImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  LayoutRoute.addChildren([
    LayoutFinalRoute,
    LayoutHw1Route,
    LayoutHw2Route,
    LayoutHw3Route,
    LayoutHw4Route,
    LayoutIndexRoute,
  ]),
  HiFiRoute.addChildren([
    HiFiHiFiRoute.addChildren([
      HiFiHiFiLoginRoute,
      HiFiHiFiSignUpRoute,
      HiFiHiFiStep1Route,
      HiFiHiFiStep11Route,
      HiFiHiFiStep2Route,
      HiFiHiFiStep3Route,
      HiFiHiFiStep4Route,
      HiFiHiFiStep5Route,
      HiFiHiFiVerifyRoute,
    ]),
  ]),
])

/* prettier-ignore-end */
