import type { DocumentNode } from '@apollo/client'
import { useApolloClient } from '@apollo/client'
import { useMemoizedFn, useAntdTable } from 'ahooks'
import type { FormInstance } from 'antd/es/form'

interface Data {
  current: number
  pageSize: number
  records: any[]
  total: number
}

type UnknownObject = Record<string, any>

const useTableRequest = <T = any>({
  gql,
  gqlDataField,
  form,
  buildVariables,
  refreshDeps,
  manual,
}: {
  gql: DocumentNode
  gqlDataField: string
  form?: FormInstance<any>
  buildVariables: (
    page: {
      pageCurrent: number
      pageSize: number
    },
    formData: UnknownObject,
  ) => UnknownObject
  refreshDeps?: React.DependencyList
  manual?: boolean
}) => {
  const apolloClient = useApolloClient()

  const request = useMemoizedFn(
    (
      page: {
        current: number
        pageSize: number
      },
      formData: UnknownObject,
    ): Promise<{
      total: number
      list: T[]
    }> => {
      return apolloClient
        .query({
          query: gql,
          variables: buildVariables(
            {
              pageCurrent: page.current,
              pageSize: page.pageSize,
            },
            formData,
          ),
        })
        .then(({ data }) => {
          const x = data[gqlDataField] as Data

          return {
            total: x.total,
            list: x.records,
          }
        })
    },
  )

  const data = useAntdTable(request, {
    form,
    refreshDeps,
    manual,
  })

  return data
}

export default useTableRequest
