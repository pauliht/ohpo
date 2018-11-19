<Router>
  {/* MobX observable style needs spread wrapping */}
  <div className="App d-flex flex-column" style={{...this.style}}>
    <header>
      <MainNav />
    </header>
    <Container-fluid tag="main" className="flex-grow-1" 
    /* style={{marginTop: '65px'}} */>
      <Route exact path="/">
        <Row className="mr-0">
          <Col className="col-12 p-0">
            <Hero />
          </Col>
        </Row>
      </Route>
    </Container-fluid>
    <Container>
      <AboutUs /> 
      <div style={{textAlign: 'center'}}>
        <Contact /> 
      </div>
      <Cases />
    </Container>
    
    <Footer />
  </div>
</Router>
