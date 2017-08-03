import SignLoginForm from './components/Form'

class SignLogin extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func
  }

  render() {
    return (
      <div className={styles.SignLogin}>
        <div className={styles.SignLoginTitle}>
          Login
        </div>

        <div className={styles.SignLoginBlock}>
          <div className={styles.SignLoginBlockTitle}>
            Enter password to your wallet
          </div>

          <div>
            87ajw408ha0g456y3485asiedfalskje54932aJDKEFJ
          </div>
        </div>

        <SignLoginForm onSubmit={this.props.handleSubmit} />
      </div>
    )
  }
}

export default connect(null,
  dispatch => ({
    handleSubmit: values => { console.log(values) }
  })
)(SignLogin)
