import React, { useEffect, useState } from 'react'
import useGitHub from '../../hooks/github-hooks'
import RepositoryItem from '../repository-itens'
import * as Styled from './style'

function Repositories() {

  const {github, getUserRepos, getUserStarred} = useGitHub();
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

  useEffect(() => {
    if(!!github.user.login) {
      getUserRepos(github.user.login);
      getUserStarred(github.user.login)
    }

    setHasUserForSearchRepos(!!github.repositories);
  }, [github.user.login]);

  return (
    <>
      {hasUserForSearchRepos ? (
        <Styled.WrapperTabs selectedTabClassName = "is-selected" selectedTabPanelClassName = "is-selected">
        <Styled.WrapperTabList>
            <Styled.WrapperTab>Repositories</Styled.WrapperTab>
            <Styled.WrapperTab>Starred</Styled.WrapperTab>
        </Styled.WrapperTabList>

        <Styled.WrapperTabPanel>
          {github.repositories.map(item => (
            <RepositoryItem key={item.id} name={item.name} linkToRepo={item.owner.html_url} fullName={item.full_name}/>
          ))}
        </Styled.WrapperTabPanel>
        <Styled.WrapperTabPanel>
        {github.starred.map(item => (
            <RepositoryItem key={item.id} name={item.name} linkToRepo={item.owner.html_url} fullName={item.full_name}/>
          ))}
        </Styled.WrapperTabPanel>
    </Styled.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  )
}

export default Repositories