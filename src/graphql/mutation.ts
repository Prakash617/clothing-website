import {gql} from '@apollo/client'

export const QUERY_NEWS_LETTER_SUSCRIBER=gql`
mutation EMAIL_SUSCRIBE_QUERY($email:String) {
  createNewsletterSubscriber(input: {email:$email}) {
    success
    errors
    subscriber {
      id
      email
      isActive
      isVerified
      created
      pk
    }
    clientMutationId
  }
}
`
export const MUTATION_CONTACT_FORM=gql`
mutation MUTATION_CONTACT_FORM($data:JSONString!,$form:String){
  createFormData(input:{
    form:$form
    data:$data
  }){
    success
    errors
		dynamicFormData{
      pk
      data
    }
  }
}
`
export const MUTATION_TAIOLRING_FORM=gql`
mutation MUTATION_TAIOLRING_FORM($data:JSONString!,$form:String){
  createFormData(input:{
    form:$form
    data:$data
  }){
    success
    errors
		dynamicFormData{
      pk
      data
    }
  }
}
`
export const LOGIN_MUTATION=gql `
mutation LOGIN_MUTATION($password:String!,$email:String){
  tokenAuth(input:{
    password:$password
    email:$email
  }){
    token,
    success,
    errors
  }
}
`